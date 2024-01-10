import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { StorageData } from "../type";
import { browser } from "../utils";

const defaultStorageData: StorageData = {
  profiles: [],
  selectedProfile: 0,
  on: 0,
};

export function useStorageData() {
  return useQuery({
    queryKey: ["storage"],
    queryFn: async () => {
      const res = (await browser.storage.sync.get()) as StorageData;
      if (Object.keys(res).length === 0) {
        await browser.storage.sync.set(defaultStorageData);
        return defaultStorageData;
      }
      return res;
    },
    suspense: true,
    placeholderData: defaultStorageData,
  });
}

export function useUpdateStorage() {
  const queryClient = useQueryClient();

  return useMutation((items: Partial<StorageData>) => browser.storage.sync.set(items), {
    onSuccess: () => queryClient.invalidateQueries(["storage"]),
  });
}
``;
