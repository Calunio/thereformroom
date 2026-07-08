/**
 * Orts-Konfiguration für lokale SEO-Landingpages rund um The Reform Room.
 * Standort: Lagesche Str. 15a, 32657 Lemgo (Kreis Lippe).
 *
 * Bewusst nur echte Nachbarorte aus Lippe (kleine Städte & Gemeinden in
 * realistischer Reichweite) — keine erfundenen Großstädte.
 */

export interface CityConfig {
  /** URL-Slug (z. B. "bad-salzuflen") */
  slug: string;
  /** Anzeigename (z. B. "Bad Salzuflen") */
  name: string;
  /** Erreichbarkeit per Auto */
  driveInfo: string;
  /** Erreichbarkeit per ÖPNV / Rad */
  transitInfo: string;
  /** Meta-Description für SEO (ca. 150–160 Zeichen) */
  metaDescription: string;
  /** Für Meta-Title: "Nur X Min." ("0" = Studio-Stadt) */
  driveMinutesDisplay: string;
  /** Bekannte Ortsteile für SEO-Fließtext */
  districts: string[];
  /** Dezente Anfahrts-Hinweise aus wichtigen Ortsteilen */
  districtRoutes: Array<{ area: string; route: string; duration: string }>;
  /** Fahrzeit-Range (lesbar, z. B. "ca. 12 Minuten") */
  driveDuration: string;
  /** Kurzer SEO-Absatz mit Ortsbezug */
  seoText: string;
}

export const CITIES: CityConfig[] = [
  {
    slug: "lemgo",
    name: "Lemgo",
    driveInfo:
      "Direkt in Lemgo – The Reform Room liegt an der Lagesche Str. 15a, zentral und aus allen Stadtteilen in wenigen Minuten erreichbar.",
    transitInfo:
      "Vom Bahnhof Lemgo bzw. Lemgo-Lüttfeld sowie mit dem Stadtbus gut erreichbar; ideal auch mit dem Rad.",
    metaDescription:
      "Reformer Pilates in Lemgo: The Reform Room in der Lagesche Str. 15a. Kleine Gruppen, hochwertiges Equipment, persönliche Betreuung. Jetzt Platz sichern.",
    driveMinutesDisplay: "0",
    districts: ["Innenstadt", "Brake", "Lieme", "Kirchheide", "Leese", "Lüttfeld", "Entrup", "Matorf-Kirchheide"],
    districtRoutes: [
      { area: "Innenstadt & Neustadt", route: "wenige Gehminuten oder mit dem Rad", duration: "ca. 3–6 Min." },
      { area: "Brake, Lüttfeld, Leese", route: "über die Lagesche Straße / Bismarckstraße", duration: "ca. 5–8 Min." },
      { area: "Lieme, Kirchheide, Entrup", route: "über die B238 bzw. Ortsverbindungsstraßen", duration: "ca. 8–12 Min." },
    ],
    driveDuration: "wenige Minuten",
    seoText:
      "Ob aus der Lemgoer Altstadt, aus Brake, Lieme oder Kirchheide – The Reform Room liegt zentral in Lemgo und ist von überall schnell erreichbar. Reformer Pilates in ruhiger, hochwertiger Atmosphäre, mitten in deiner Stadt.",
  },
  {
    slug: "bad-salzuflen",
    name: "Bad Salzuflen",
    driveInfo:
      "Über die B238 in rund 12 Minuten nach Lemgo – eine kurze, entspannte Fahrt für dein Training zwischendurch.",
    transitInfo:
      "Regelmäßige Bus- und Bahnverbindungen zwischen Bad Salzuflen und Lemgo; von dort ein kurzer Weg zum Studio.",
    metaDescription:
      "Reformer Pilates für Bad Salzuflen: The Reform Room in Lemgo, in ca. 12 Min. über die B238 erreichbar. Kleine Gruppen, persönliche Betreuung.",
    driveMinutesDisplay: "12",
    districts: ["Innenstadt", "Schötmar", "Werl-Aspe", "Grastrup-Hölsen", "Wüsten", "Lockhausen", "Holzhausen"],
    districtRoutes: [
      { area: "Schötmar, Werl-Aspe", route: "über die B239 / B238 Richtung Lemgo", duration: "ca. 12–15 Min." },
      { area: "Innenstadt, Bad", route: "über die B238", duration: "ca. 13–16 Min." },
      { area: "Wüsten, Lockhausen", route: "über Ortsverbindungen zur B238", duration: "ca. 16–20 Min." },
    ],
    driveDuration: "ca. 12 Minuten",
    seoText:
      "Aus Schötmar, Werl-Aspe, Wüsten oder der Bad Salzufler Innenstadt bist du über die B238 in rund 12 Minuten bei The Reform Room in Lemgo. Reformer Pilates in kleinen Gruppen – ein bewusster Gegenpol zum vollen Alltag.",
  },
  {
    slug: "detmold",
    name: "Detmold",
    driveInfo:
      "Über die B238 in etwa 18 Minuten nach Lemgo – gut planbar vor oder nach der Arbeit.",
    transitInfo:
      "Bahn- und Busverbindungen von Detmold nach Lemgo; von dort schnell weiter zum Studio.",
    metaDescription:
      "Reformer Pilates für Detmold: The Reform Room in Lemgo, in ca. 18 Min. erreichbar. Boutique-Studio, kleine Gruppen, moderne Reformer.",
    driveMinutesDisplay: "18",
    districts: ["Innenstadt", "Hiddesen", "Heiligenkirchen", "Pivitsheide", "Berlebeck", "Klüt", "Spork-Eichholz"],
    districtRoutes: [
      { area: "Innenstadt, Klüt", route: "über die B238 Richtung Lemgo", duration: "ca. 18–22 Min." },
      { area: "Pivitsheide, Hiddesen", route: "über L758 / B238", duration: "ca. 20–25 Min." },
      { area: "Heiligenkirchen, Berlebeck", route: "über die B239 / B238", duration: "ca. 22–28 Min." },
    ],
    driveDuration: "ca. 18 Minuten",
    seoText:
      "Von der Detmolder Innenstadt, aus Hiddesen oder Pivitsheide erreichst du The Reform Room in Lemgo über die B238 in rund 18 Minuten. Für alle, die in Detmold ein hochwertiges Reformer-Pilates-Studio mit persönlicher Atmosphäre suchen.",
  },
  {
    slug: "lage",
    name: "Lage",
    driveInfo:
      "Über die B238 in rund 14 Minuten nach Lemgo – kurze Wege, viel Ruhe.",
    transitInfo:
      "Bahnverbindung Lage–Lemgo sowie Busse; das Studio ist vom Lemgoer Zentrum aus schnell erreicht.",
    metaDescription:
      "Reformer Pilates für Lage: The Reform Room in Lemgo, in ca. 14 Min. über die B238. Persönliche Betreuung, kleine Gruppen, moderne Reformer.",
    driveMinutesDisplay: "14",
    districts: ["Kernstadt", "Hörste", "Heiden", "Müssen", "Ohrsen", "Waddenhausen", "Ehrentrup"],
    districtRoutes: [
      { area: "Kernstadt, Ehrentrup", route: "über die B238 Richtung Lemgo", duration: "ca. 14–17 Min." },
      { area: "Hörste, Müssen", route: "über L712 / B238", duration: "ca. 16–20 Min." },
      { area: "Heiden, Waddenhausen", route: "über Ortsverbindungen zur B238", duration: "ca. 18–22 Min." },
    ],
    driveDuration: "ca. 14 Minuten",
    seoText:
      "Ob aus der Lager Kernstadt, aus Hörste oder Heiden – über die B238 bist du in rund 14 Minuten bei The Reform Room in Lemgo. Reformer Pilates, das Kraft, Haltung und Ruhe verbindet.",
  },
  {
    slug: "doerentrup",
    name: "Dörentrup",
    driveInfo:
      "Über die B66 in etwa 15 Minuten nach Lemgo – eine ruhige Fahrt durchs Lipperland.",
    transitInfo:
      "Bahnhaltepunkte der Extertalbahn und Busverbindungen führen Richtung Lemgo.",
    metaDescription:
      "Reformer Pilates für Dörentrup: The Reform Room in Lemgo, in ca. 15 Min. erreichbar. Kleines Boutique-Studio mit persönlicher Betreuung.",
    driveMinutesDisplay: "15",
    districts: ["Bega", "Humfeld", "Wendlinghausen", "Schwelentrup", "Hillentrup", "Denkinghausen"],
    districtRoutes: [
      { area: "Bega, Humfeld", route: "über die B66 Richtung Lemgo", duration: "ca. 15–18 Min." },
      { area: "Wendlinghausen, Hillentrup", route: "über L758 / B66", duration: "ca. 17–21 Min." },
      { area: "Schwelentrup, Denkinghausen", route: "über Ortsverbindungen zur B66", duration: "ca. 18–23 Min." },
    ],
    driveDuration: "ca. 15 Minuten",
    seoText:
      "Aus Bega, Humfeld oder Wendlinghausen erreichst du The Reform Room in Lemgo über die B66 in rund 15 Minuten. Reformer Pilates in einer Atmosphäre, die bewusst auf Qualität statt Masse setzt.",
  },
  {
    slug: "kalletal",
    name: "Kalletal",
    driveInfo:
      "Über die B238 / B514 in etwa 18 Minuten nach Lemgo – entspannt aus dem nördlichen Lippe.",
    transitInfo:
      "Busverbindungen aus den Kalletaler Ortsteilen Richtung Lemgo; ideal auch für Pendler.",
    metaDescription:
      "Reformer Pilates für Kalletal: The Reform Room in Lemgo, in ca. 18 Min. erreichbar. Kleine Gruppen, hochwertige Reformer, persönliche Betreuung.",
    driveMinutesDisplay: "18",
    districts: ["Hohenhausen", "Langenholzhausen", "Bavenhausen", "Talle", "Varenholz", "Erder", "Stemmen"],
    districtRoutes: [
      { area: "Hohenhausen, Langenholzhausen", route: "über die B238 Richtung Lemgo", duration: "ca. 18–22 Min." },
      { area: "Talle, Bavenhausen", route: "über Ortsverbindungen zur B238", duration: "ca. 20–24 Min." },
      { area: "Varenholz, Erder", route: "über die B514 / B238", duration: "ca. 22–27 Min." },
    ],
    driveDuration: "ca. 18 Minuten",
    seoText:
      "Von Hohenhausen, Langenholzhausen oder Talle bist du über die B238 in rund 18 Minuten bei The Reform Room in Lemgo. Dein Reformer-Pilates-Studio im Herzen von Lippe.",
  },
  {
    slug: "blomberg",
    name: "Blomberg",
    driveInfo:
      "Über die B1 / B238 in etwa 20 Minuten nach Lemgo – eine schöne Strecke durchs Lipperland.",
    transitInfo:
      "Busverbindungen von Blomberg Richtung Lemgo/Detmold; von dort weiter zum Studio.",
    metaDescription:
      "Reformer Pilates für Blomberg: The Reform Room in Lemgo, in ca. 20 Min. erreichbar. Boutique-Studio, kleine Gruppen, moderne Reformer.",
    driveMinutesDisplay: "20",
    districts: ["Kernstadt", "Donop", "Istrup", "Cappel", "Großenmarpe", "Reelkirchen", "Höntrup"],
    districtRoutes: [
      { area: "Kernstadt, Istrup", route: "über die B1 / B238 Richtung Lemgo", duration: "ca. 20–24 Min." },
      { area: "Donop, Cappel", route: "über Ortsverbindungen zur B238", duration: "ca. 22–26 Min." },
      { area: "Großenmarpe, Reelkirchen", route: "über die B1", duration: "ca. 24–28 Min." },
    ],
    driveDuration: "ca. 20 Minuten",
    seoText:
      "Aus der Blomberger Kernstadt, aus Istrup oder Donop erreichst du The Reform Room in Lemgo in rund 20 Minuten. Reformer Pilates in kleinen Gruppen – der Weg lohnt sich.",
  },
  {
    slug: "barntrup",
    name: "Barntrup",
    driveInfo:
      "Über die B66 in etwa 20 Minuten nach Lemgo – klare Strecke aus dem östlichen Lippe.",
    transitInfo:
      "Extertalbahn und Busse verbinden Barntrup mit Lemgo; gut planbar für feste Termine.",
    metaDescription:
      "Reformer Pilates für Barntrup: The Reform Room in Lemgo, in ca. 20 Min. über die B66. Persönliche Betreuung, kleine Gruppen, moderne Reformer.",
    driveMinutesDisplay: "20",
    districts: ["Kernstadt", "Alverdissen", "Sonneborn", "Selbeck", "Uflen", "Sommersell"],
    districtRoutes: [
      { area: "Kernstadt, Alverdissen", route: "über die B66 Richtung Lemgo", duration: "ca. 20–24 Min." },
      { area: "Sonneborn, Selbeck", route: "über L924 / B66", duration: "ca. 22–26 Min." },
      { area: "Uflen, Sommersell", route: "über Ortsverbindungen zur B66", duration: "ca. 23–28 Min." },
    ],
    driveDuration: "ca. 20 Minuten",
    seoText:
      "Von der Barntruper Kernstadt, aus Alverdissen oder Sonneborn bist du über die B66 in rund 20 Minuten bei The Reform Room in Lemgo. Reformer Pilates, das dich stärkt – körperlich und mental.",
  },
  {
    slug: "extertal",
    name: "Extertal",
    driveInfo:
      "Über die B238 / B66 in etwa 24 Minuten nach Lemgo – eine bewusste Fahrt für dein Training.",
    transitInfo:
      "Die Extertalbahn und Busse verbinden die Ortsteile mit Lemgo; ideal für regelmäßige Kurse.",
    metaDescription:
      "Reformer Pilates für Extertal: The Reform Room in Lemgo, in ca. 24 Min. erreichbar. Kleines Boutique-Studio mit persönlicher Betreuung.",
    driveMinutesDisplay: "24",
    districts: ["Bösingfeld", "Rinteln-Nähe", "Almena", "Silixen", "Bremke", "Nalhof", "Göstrup"],
    districtRoutes: [
      { area: "Bösingfeld, Almena", route: "über die B66 Richtung Lemgo", duration: "ca. 24–28 Min." },
      { area: "Silixen, Bremke", route: "über Ortsverbindungen zur B66", duration: "ca. 26–30 Min." },
      { area: "Göstrup, Nalhof", route: "über L924 / B66", duration: "ca. 27–32 Min." },
    ],
    driveDuration: "ca. 24 Minuten",
    seoText:
      "Aus Bösingfeld, Almena oder Silixen erreichst du The Reform Room in Lemgo über die B66 in rund 24 Minuten. Wer im Extertal hochwertiges Reformer Pilates sucht, ist bei uns richtig – kleine Gruppen, große Wirkung.",
  },
];

const slugToCity = new Map(CITIES.map((c) => [c.slug, c]));

/** Slugs für die Footer-Sektion „Pilates in Lippe" */
export const LIPPE_FOOTER_SLUGS: string[] = [
  "lemgo",
  "bad-salzuflen",
  "detmold",
  "lage",
  "doerentrup",
  "kalletal",
  "blomberg",
  "barntrup",
  "extertal",
];

export function getCityBySlug(slug: string): CityConfig | undefined {
  return slugToCity.get(slug.toLowerCase());
}

export function getAllCitySlugs(): string[] {
  return CITIES.map((c) => c.slug);
}

/** Städte für die Footer-Links „Pilates in Lippe" (Reihenfolge wie LIPPE_FOOTER_SLUGS) */
export function getLippeFooterCities(): CityConfig[] {
  return LIPPE_FOOTER_SLUGS.map((slug) => slugToCity.get(slug)!).filter(Boolean);
}
