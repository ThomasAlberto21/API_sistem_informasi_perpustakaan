import express from 'express';
import bukuController from '../controller/bukuController.js';
import adminController from '../controller/adminController.js';
import agamaController from '../controller/agamaController.js';
import kelasController from '../controller/kelasController.js';
import siswaController from '../controller/siswaController.js';
import riwayatController from '../controller/riwayatController.js';
import rakBukuController from '../controller/rakBukuController.js';
import peminjamanBukuController from '../controller/peminjamanBukuController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = new express.Router();
router.use(authMiddleware);

// ADMIN
router.get('/api/admin', adminController.getAdminController);
router.put('/api/admin/:adminId', adminController.updateAdminController);
router.delete('/api/admin/logout', adminController.logoutAdminController);

// AGAMA
router.get('/api/agama', agamaController.getAgamaController);
router.get('/api/agama/search', agamaController.searchAgamaController);
router.post('/api/agama', agamaController.createAgamaController);
router.get('/api/agama/:agamaId', agamaController.getAgamaByIdController);
router.put('/api/agama/:agamaId', agamaController.updateAgamaController);
router.delete('/api/agama/:agamaId', agamaController.deleteAgamaController);

// KELAS
router.get('/api/kelas', kelasController.getKelasController);
router.get('/api/kelas/search', kelasController.searchKelasController);
router.post('/api/kelas', kelasController.createKelasController);
router.get('/api/kelas/:kelasId', kelasController.getKelasByIdController);
router.put('/api/kelas/:kelasId', kelasController.updateKelasController);
router.delete('/api/kelas/:kelasId', kelasController.deleteKelasController);

// RAK BUKU
router.get('/api/rak-buku', rakBukuController.getRakBukuController);
router.get('/api/rak-buku/search', rakBukuController.searchRakBukuController);
router.post('/api/rak-buku', rakBukuController.createRakBukuController);
router.get(
  '/api/rak-buku/:rakBukuId',
  rakBukuController.getRakBukuByIdController,
);
router.put(
  '/api/rak-buku/:rakBukuId',
  rakBukuController.updateRakBukuController,
);
router.delete(
  '/api/rak-buku/:rakBukuId',
  rakBukuController.deleteRakBukuController,
);

// BUKU
router.get('/api/buku', bukuController.getBukuController);
router.get('/api/buku/search', bukuController.searchBukuController);
router.post('/api/buku', bukuController.createBukuController);
router.get('/api/buku/:bukuId', bukuController.getBukuByIdController);
router.put('/api/buku/:bukuId', bukuController.updateBukuController);
router.delete('/api/buku/:bukuId', bukuController.deleteBukuController);

// SISWA
router.get('/api/siswa', siswaController.getSiswaController);
router.get('/api/siswa/search', siswaController.searchSiswaController);
router.post('/api/siswa', siswaController.createSiswaController);
router.get('/api/siswa/:siswaId', siswaController.getSiswaByIdController);
router.put('/api/siswa/:siswaId', siswaController.updateSiswaController);
router.delete('/api/siswa/:siswaId', siswaController.deleteSiswaController);

// PEMINJAMAN BUKU
router.get(
  '/api/peminjaman-buku',
  peminjamanBukuController.getPeminjamanBukuController,
);
router.post(
  '/api/peminjaman-buku/:siswaId',
  peminjamanBukuController.createPeminjamanBukuController,
);
router.get(
  '/api/peminjaman-buku/search',
  peminjamanBukuController.searchPeminjamanBukuController,
);
router.put(
  '/api/peminjaman-buku/:peminjamanBukuId',
  peminjamanBukuController.updatePeminjamanBukuController,
);
router.delete(
  '/api/peminjaman-buku/:peminjamanBukuId',
  peminjamanBukuController.deletePeminjamanBukuController,
);

// RIWAYAT
router.get('/api/riwayat', riwayatController.getRiwayatController);
router.get('/api/riwayat/search', riwayatController.searchRiwayatController);
router.delete('/api/riwayat', riwayatController.deleteRiwayatController);

export { router };
