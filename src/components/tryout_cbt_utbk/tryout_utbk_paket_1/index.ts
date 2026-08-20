/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Try Out UTBK Paket 1
 * Pusat CBT Try Out UTBK/SNBT
 * 9 Subtes Resmi UTBK-SNBT:
 * 1. Penalaran Induktif
 * 2. Penalaran Deduktif
 * 3. Penalaran Kuantitatif
 * 4. Pengetahuan dan Pemahaman Umum (PPU)
 * 5. Pemahaman Bacaan dan Menulis (PBM)
 * 6. Pengetahuan Kuantitatif (PK)
 * 7. Literasi dalam Bahasa Indonesia
 * 8. Literasi dalam Bahasa Inggris
 * 9. Penalaran Matematika
 */

export { default as CbtTryoutInduktif } from './penalaran_induktif/CbtTryoutInduktif';
export { induktifTryoutData } from './penalaran_induktif/induktifTryoutData';

export { default as CbtTryoutDeduktif } from './penalaran_deduktif/CbtTryoutDeduktif';
export { deduktifTryoutData } from './penalaran_deduktif/deduktifTryoutData';

export { default as CbtTryoutPenalaranKuantitatif } from './penalaran_kuantitatif/CbtTryoutPenalaranKuantitatif';
export { penalaranKuantitatifTryoutData } from './penalaran_kuantitatif/penalaranKuantitatifTryoutData';

export { default as CbtTryoutPpu } from './pengetahuan_pemahaman_umum/CbtTryoutPpu';
export { ppuTryoutData } from './pengetahuan_pemahaman_umum/ppuTryoutData';

export { default as CbtTryoutPbm } from './pemahaman_bacaan_menulis/CbtTryoutPbm';
export { pbmTryoutData } from './pemahaman_bacaan_menulis/pbmTryoutData';

export { default as CbtTryoutPk } from './pengetahuan_kuantitatif/CbtTryoutPk';
export { pkTryoutData } from './pengetahuan_kuantitatif/pkTryoutData';

export { default as CbtTryoutLiterasiIndo } from './literasi_bahasa_indonesia/CbtTryoutLiterasiIndo';
export { litIndoTryoutData } from './literasi_bahasa_indonesia/litIndoTryoutData';

export { default as CbtTryoutLiterasiInggris } from './literasi_bahasa_inggris/CbtTryoutLiterasiInggris';
export { litInggrisTryoutData } from './literasi_bahasa_inggris/litInggrisTryoutData';

export { default as CbtTryoutPenalaranMatematika } from './penalaran_matematika/CbtTryoutPenalaranMatematika';
export { penalaranMtkTryoutData } from './penalaran_matematika/penalaranMtkTryoutData';

export { default as CbtTryoutUtbkBase } from './CbtTryoutUtbkBase';
export * from './types';
