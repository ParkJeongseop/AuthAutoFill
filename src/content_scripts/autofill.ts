import { Profile, StorageData } from "../type";
import { browser, log } from "../utils";
import { Step, conditions } from "./steps";

function stepHandler(step: Step, profile: Profile) {
  try {
    const selector = typeof step.selector === "function" ? step.selector(profile) : step.selector;

    const element = document.querySelector(selector);
    if (!element) {
      return false;
    }

    const result = step.executor(element, profile);

    // 이벤트를 발생시키지 않으면 값이 바뀌지 않는 사이트들이 있음
    element.dispatchEvent(new Event("input", { bubbles: true }));
    element.dispatchEvent(new Event("change", { bubbles: true }));
    return result;
  } catch (error) {
    return false;
  }
}

browser.storage.sync.get((data: StorageData) => {
  if (!data.on) return log("OFF");
  if (!data.profiles) return log("No profiles");

  const profiles = data.profiles;
  const profile = profiles[data.selectedProfile];
  if (!profile) return log("No selected profile");

  log("Auth Autofill (본인인증 자동완성)");
  log("한국 휴대전화 본인인증 서비스 자동완성 브라우저 확장 프로그램");

  for (const condition of conditions) {
    const isMatch = condition.matches.some((url) => window.location.href.includes(url));
    if (!isMatch) continue;

    const enabledSteps = condition.steps.filter((step) => {
      const disabled = typeof step.disabled === "function" ? step.disabled(profile) : step.disabled;
      return !disabled;
    });

    const { type = "once-strict" } = condition;
    if (type === "loop") {
      setInterval(() => {
        for (const step of enabledSteps) {
          stepHandler(step, profile);
        }
      }, 500);
      return;
    }
    if (type === "loop-strict") {
      setInterval(() => {
        for (const step of enabledSteps) {
          const result = stepHandler(step, profile);
          if (result === false) break;
        }
      }, 500);
      return;
    }
    if (type === "once") {
      for (const step of condition.steps) {
        stepHandler(step, profile);
      }
      return;
    }
    if (type === "once-strict") {
      for (const step of condition.steps) {
        const result = stepHandler(step, profile);
        if (result === false) break;
      }
      return;
    }
  }
});
