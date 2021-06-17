//
//  ViewController.swift
//  AuthAutofill
//
//  Created by 박정섭 on 2021/01/19.
//

import Cocoa
import SafariServices.SFSafariApplication
import SafariServices.SFSafariExtensionManager

let appName = NSLocalizedString("appName", comment: "")
let extensionBundleIdentifier = "com.parkjeongseop.AuthAutofill.Extension"

class ViewController: NSViewController {

    @IBOutlet var appNameLabel: NSTextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.appNameLabel.stringValue = appName
        SFSafariExtensionManager.getStateOfSafariExtension(withIdentifier: extensionBundleIdentifier) { (state, error) in
            guard let state = state, error == nil else {
                // Insert code to inform the user that something went wrong.
                return
            }

            DispatchQueue.main.async {
                if (state.isEnabled) {
                    self.appNameLabel.stringValue = NSLocalizedString("extension_on", comment: "")
                } else {
                    self.appNameLabel.stringValue = NSLocalizedString("extension_off", comment: "")
                }
            }
        }
    }
    
    @IBAction func openSafariExtensionPreferences(_ sender: AnyObject?) {
        SFSafariApplication.showPreferencesForExtension(withIdentifier: extensionBundleIdentifier) { error in
            guard error == nil else {
                // Insert code to inform the user that something went wrong.
                return
            }

            DispatchQueue.main.async {
                NSApplication.shared.terminate(nil)
            }
        }
    }

}
