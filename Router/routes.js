import express from 'express';
import asyncHandler from 'express-async-handler';
import {
  testController,
  spielerErstellenController,
  spielerLoeschenController,
  spielerBekommenController,
  loginController,
  getPaymentTypePlayer,
  getSumTypePlayer,
} from '../Controllers/spieler.js';

import {
  spielerZahlungBekommenController,
  spielerZahlungErstellenController,
  spielerZahlungBezahlenController,
  spielerZahlungLoeschenController,
  getAusgabenController,
  postAusgabenController,
} from '../Controllers/zahlung.js';

import { getPaymentType, getSumType } from '../Controllers/stats.js';

const router = express.Router();

//----------------ROUTEN-----------

// Test route
router.get('/test', asyncHandler(testController));

//Spieler-Routen
router.get('/spieler', asyncHandler(spielerBekommenController));
router.post('/spieler', asyncHandler(spielerErstellenController));
router.delete('/spieler/:id', asyncHandler(spielerLoeschenController));

router.post('/login', asyncHandler(loginController));

//Zahlung-Routen
router.get('/zahlung', asyncHandler(spielerZahlungBekommenController));
router.post('/zahlung', asyncHandler(spielerZahlungErstellenController));
router.patch('/zahlung/:z_id', asyncHandler(spielerZahlungBezahlenController));
router.delete('/zahlung/:z_id', asyncHandler(spielerZahlungLoeschenController));

router.get('/ausgaben', asyncHandler(getAusgabenController));
router.post('/ausgaben', asyncHandler(postAusgabenController));

//Stats
router.get('/paymentType', asyncHandler(getPaymentType));
router.get('/sumType', asyncHandler(getSumType));

router.get('/paymentTypePlayer/:id', asyncHandler(getPaymentTypePlayer));
router.get('/sumTypePlayer/:id', asyncHandler(getSumTypePlayer));

export default router;
