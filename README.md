# Chrome100

## Collection of ChromeOS recovery images.

Brought to you by [SystemYA](https://github.com/sysce)

- [Source code](https://github.com/sysce/chrome100)
- [Wiki](https://github.com/sysce/chrome100/wiki) (deployment, using server scripts)

- [Why use recovery images?](#why-use-recovery-images)
	* [Upgrading](#upgrading)
	* [Downgranding](#downgrading)
- [Recovery images](#recovery-images)
- [Usage](#usage)
	* [Finding the right recovery image](#finding-the-right-recovery-image)
	* [Burning the `.zip` file to a USB](#burning-the-zip-file-to-a-usb)
	* [Restoring ChromeOS from a USB drive](#restoring-chromeos-from-a-usb-drive)
- [Source](https://github.com/sysce/chrome100)
	* [Issues/support](https://github.com/sysce/chrome100/issues)
- [API](#api)
	* [Request recovery image](#request-recovery-image)
	* [List of boards and versions](#list-of-boards-and-versions)
- [Explanation](#explanation)

<!-- REMOVE -->

## Recovery images

**NOTICE:** Recovery images are only available on the [website](https://chrome100.dev).

<!-- REMOVE -->

## Why use recovery images?

Recovery images can downgrade chromebooks to earlier versions and even upgrade if updates are blocked on the chromebook.

### Upgrading:

- Bypassing restrictions that prevent updating ChromeOS

- Using the latest ChromeOS features

### Downgrading:

- Using removed features such as guest mode before enrollment

- Using patched exploits

## Usage

ChromeOS recovery images come in a `.zip` file.

You will need:

- USB drive with at least 8 GB of storage
- [Chromebook Recovery Utility](https://chrome.google.com/webstore/detail/chromebook-recovery-utili/pocpnlppkickgojjlmhdmidojbmbodfm)

### Finding the right recovery image

Recovery images have a code name associated with them also referred to as the board name.

To find your board name visit the website `chrome://version` and find the line labelled **Firmware Version**. It will look something like `Google_Reks.7000.100.100`. Your Chromebook's firmware version is the word after `Google_` and before a period.

![ChromeOS reks version page](https://chrome100.dev/version.png)

### Burning the `.zip` file to a USB

1. Open the [Chromebook Recovery Utility](https://chrome.google.com/webstore/detail/chromebook-recovery-utili/pocpnlppkickgojjlmhdmidojbmbodfm)   

2. Click on the gears button in the top right of the window and select `Use local image`.

3. Navigate to the `.zip` recovery image you downloaded from [the list of recovery images](#recovery-images).

4. Select your USB drive as prompted by the window.

5. Press create now.

### Restoring ChromeOS from a USB drive

1. Press <kbd>esc</kbd> + <kbd>refresh</kbd> + <kbd>power</kbd> to enter the recovery menu.

2. Plug in your USB drive you previously burnt a recovery image to.

3. Press enter once the menu is done verifying your USB drive.

4. Once finished, unplug your USB drive.

## API

### Request recovery image

| Method | Endpoint  |
| - | - |
| `GET` | [https://chrome100.dev/download](/download) |

Search query:

| Parameter | Type     | Description                                     |
| --------- | -------- | ----------------------------------------------- |
| Board     | `String`   | The board the recovery image will be used on  |
| Release   | `Integer`  | The version of Chrome in the recovery image   |

Response: 

302 Redirect to the requested recovery image `.zip` file

### List of boards and versions

Returns a JSON object containing pairs of board names and arrays of chrome versions the board is compatible with. 

| Method | Endpoint |
| - | - |
| `GET` | [https://chrome100.dev/data](/data) |

Response:

```json
{
	"reks": ["48","51","52","53","56","57","58","59","60","61","62","65","66","68","69","70","71","72","73","74","75","76","78","79","80","81","83","84","85","86","87","88","89","90","91"],
}
```