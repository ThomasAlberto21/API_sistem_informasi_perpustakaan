import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { app } from '../../src/app/app.js';


describe('PUT /api/siswa/:siswaId', () => {
  it('should return 200 when update siswa success', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);

    const formData = {
      nama_siswa: 'Siswa EZ',
      nis: 120,
      nisn: 12341,
      tanggal_lahir: '17 April 2029',
      tempat_lahir: 'Jakarta',
      jenis_kelamin: 'Laki-laki',
      id_agama: '7041a31a-eeac-4d4d-b23d-07ba8f1f3762',
      alamat: 'Jl. Siswa 1',
      id_kelas: '710dca99-de8e-479d-9e6f-8979f88287f0',
    };

    const result = await supertest(app)
      .put('/api/siswa/67dad486-0c2e-47fb-8728-a4a35e4331db')
      .set('Authorization', `Bearer ${token}`)
      .field(formData)
      .attach('foto_siswa', '/home/thomas/Documents/usecase.png');

    expect(result.status).toEqual(200);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when update siswa without token', async () => {
    const formData = {
      nama_siswa: 'Siswa EZ',
      nis: 120,
      nisn: 12341,
      tanggal_lahir: '17 April 2029',
      tempat_lahir: 'Jakarta',
      jenis_kelamin: 'Laki-laki',
      id_agama: '7041a31a-eeac-4d4d-b23d-07ba8f1f3762',
      alamat: 'Jl. Siswa 1',
      id_kelas: '710dca99-de8e-479d-9e6f-8979f88287f0',
    };

    const result = await supertest(app)
      .put('/api/siswa/1')
      .field(formData)
      .attach('foto_siswa', '/home/thomas/Documents/usecase.png');

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 401 when update siswa with invalid token', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, 'test');

    const formData = {
      nama_siswa: 'Siswa EZ',
      nis: 120,
      nisn: 12341,
      tanggal_lahir: '17 April 2029',
      tempat_lahir: 'Jakarta',
      jenis_kelamin: 'Laki-laki',
      id_agama: '7041a31a-eeac-4d4d-b23d-07ba8f1f3762',
      alamat: 'Jl. Siswa 1',
      id_kelas: '710dca99-de8e-479d-9e6f-8979f88287f0',
    };

    const result = await supertest(app)
      .put('/api/siswa/1')
      .set('Authorization', `Bearer ${token}`)
      .field(formData)
      .attach('foto_siswa', '/home/thomas/Documents/usecase.png');

    expect(result.status).toEqual(401);
    expect(result.body.message).toBeDefined();
  });

  it('should return 404 when update siswa siswaId not found', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);

    const formData = {
      nama_siswa: 'Siswa EZ',
      nis: 120,
      nisn: 12341,
      tanggal_lahir: '17 April 2029',
      tempat_lahir: 'Jakarta',
      jenis_kelamin: 'Laki-laki',
      id_agama: '7041a31a-eeac-4d4d-b23d-07ba8f1f3762',
      alamat: 'Jl. Siswa 1',
      id_kelas: '710dca99-de8e-479d-9e6f-8979f88287f0',
    };

    const result = await supertest(app)
      .put('/api/siswa/1')
      .set('Authorization', `Bearer ${token}`)
      .field(formData)
      .attach('foto_siswa', '/home/thomas/Documents/usecase.png');

    expect(result.status).toEqual(404);
    expect(result.body.message).toBeDefined();
  });

  it('should return 409 when update siswa nama_siswa already exist', async () => {
    const token = jwt.sign({
      username: 'admin',
    }, process.env.SECRET_KEY);

    const formData = {
      nama_siswa: 'Siswa EZ',
      nis: 120,
      nisn: 12341,
      tanggal_lahir: '17 April 2029',
      tempat_lahir: 'Jakarta',
      jenis_kelamin: 'Laki-laki',
      id_agama: '7041a31a-eeac-4d4d-b23d-07ba8f1f3762',
      alamat: 'Jl. Siswa 1',
      id_kelas: '710dca99-de8e-479d-9e6f-8979f88287f0',
    };

    const result = await supertest(app)
      .put('/api/siswa/67dad486-0c2e-47fb-8728-a4a35e4331db')
      .set('Authorization', `Bearer ${token}`)
      .field(formData)
      .attach('foto_siswa', '/home/thomas/Documents/usecase.png');

    expect(result.status).toEqual(409);
    expect(result.body.message).toBeDefined();
  });
});