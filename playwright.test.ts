import { test as base } from "@playwright/experimental-ct-react";

export type Options = { defaultItem: string };

// Extend basic test by providing a "defaultItem" option and a "todoPage" fixture.
export const test = base.extend<Options>({
  // Define an option and provide a default value.
  // We can later override it in the config.
  defaultItem: ["Do stuff", { option: true }],
});
