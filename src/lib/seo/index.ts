import type { SeoExtra } from "./types";
import { paraContent } from "./para";
import { isHukukContent } from "./is-hukuk";
import { saglikContent } from "./saglik";
import { egitimBilimContent } from "./egitim-bilim";
import { gunlukContent } from "./gunluk";
import { evTeknikContent } from "./ev-teknik";

export type { SeoExtra };

/** Tüm hesaplayıcı SEO içerikleri — slug ile erişilir */
export const seoContent: Record<string, SeoExtra> = {
  ...paraContent,
  ...isHukukContent,
  ...saglikContent,
  ...egitimBilimContent,
  ...gunlukContent,
  ...evTeknikContent,
};
