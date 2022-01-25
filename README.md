# Chrome100

## Collection of ChromeOS recovery images.

Brought to you by [SystemYA](https://github.com/sysce)

[Source code](https://github.com/sysce/chrome100)

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

## Explanation

ChromeOS recovery images can be used to downgrade/upgrade your Chromebook. Reverse engineering the URLs used by the recovery servers allows for generating URLs that apply to a specific board, firmware version, and ChromeOS release.

Scraping all valid combinations of board, firmware, and ChromeOS release allows us to provide a service that allows you to choose a specific combination without the need of researchihng into the specific firmware version or ChromeOS version id

A bulk list of ChromeOS version ids scraped from all over the web along with all firmware versions and can be found in the [consts file](consts.js).

dl.google.com link structure:

> https://dl.google.com/dl/edgedl/chromeos/recovery/chromeos_CHROMEOS.VERSION.ID_CODENAME_recovery_stable-channel_mp-vFIRMWARE-VERSION.bin.zip

## Hosting

This will start a webserver listening on http://127.0.0.1:7100/

1. CD into this repository
2. Install modules: `npm install`
3. Run the script: `npm run start`

## Updating

This will update consts.js, using data from https://dl.google.com/dl/edgedl/chromeos/recovery/recovery.json

1. CD into this repository
2. Install modules: `npm install`
3. Run the sync script: `npm run update`

### Chromium Dash

Google released Chromium Dash, a version tracker for Chrome releases. Unforunately, none of the data includes ChromeOS platform versions. 

> Note: The content of this website will be moving to chromiumdash.appspot.com. This platform will be deprecated towards the beginning of Q1, 2022

https://cros-updates-serving.appspot.com/

Efforts will be made to preserve the contents of cros-updates-serving on Wayback Machine.

https://web.archive.org/web/https://cros-updates-serving.appspot.com/

### Blog searching

The Chrome Releases Blog is highly indexed on Google, allowing data to be extracted. There are many articles, stretching all the way back to the first ChromeOS release.

The last 67 posts about ChromeOS: (Will be used in scraper)
> https://chromereleases.googleblog.com/search/label/Chrome%20OS?max-results=700

Search on Google for:
> site:chromereleases.googleblog.com "chrome os" "stable channel" "updated to"

This URL query at the end of the blog URL may show earlier results.
> &reverse-paginate=true

TODO: Release userscript for scraping https://chromereleases.googleblog.com/search/label/Chrome%20OS?max-results=67
