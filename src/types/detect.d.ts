declare module "detect.js" {
  interface DeviceInfo {
    type?: string;
    model?: string;
    manufacturer?: string;
  }

  interface BrowserInfo {
    name?: string;
    version?: string;
  }

  interface OSInfo {
    name?: string;
    version?: string;
  }

  interface DetectResult {
    device: DeviceInfo;
    browser: BrowserInfo;
    os: OSInfo;
  }

  interface Detect {
    parse(userAgent: string): DetectResult;
  }

  const detect: Detect;
  export default detect;
}
