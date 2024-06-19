import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

const JadwalList = () => {
  const [jadwal, setJadwal] = useState([]);

  useEffect(() => {
    getJadwal();
  }, []);

  const getJadwal = async () => {
    const response = await axios.get("http://localhost:5000/jadwal_dosen");
    setJadwal(response.data);
  };


  return (
    <div>
      <h1 className="title">Jadwal Dosen</h1>
      <h2 className="subtitle">Daftar Jadwal</h2>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Mata Kuliah</th>
            <th>Kelas</th>
            <th>SKS</th>
            <th>Ruang</th>
            <th>Hari</th>
            <th>Waktu</th>
            <th>Nama Dosen</th>
          </tr>
        </thead>
        <tbody>
          {jadwal.map((jadwal, index) => (
            <tr key={jadwal.uuid}>
              <td>{index + 1}</td>
              <td>{jadwal.mata_kuliah}</td>
              <td>{jadwal.kelas}</td>
              <td>{jadwal.sks} </td>
              <td>{jadwal.ruang}</td>
              <td>{jadwal.hari}</td>
              <td>{jadwal.waktu}</td>
              <td>{jadwal.user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JadwalList;
