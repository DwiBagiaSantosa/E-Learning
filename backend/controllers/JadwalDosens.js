import JadwalDosen from "../models/JadwalDosenModel.js";
import User from "../models/UserModel.js";

export const getJadwalDosens = async(req, res) =>{
    try {
        let response;
        if(req.role === "dosen"){
            response = await JadwalDosen.findAll({
                attributes:['uuid', 'mata_kuliah', 'kelas','sks', 'ruang', 'hari', 'waktu'],
                include:[{
                    model: User,
                    attributes:['name','email']
                }]
            });
        }else{
            response = await JadwalDosen.findAll({
                attributes:['uuid', 'mata_kuliah', 'kelas','sks', 'ruang', 'hari', 'waktu'],
                include:[{
                    model: User,
                    attributes:['name']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getJadwalDosenbyId = async(req, res) =>{
    // try {
    //     let response;
    //     if(req.role === "dosen"){
    //         response = await Materi.findOne({
    //             attributes:['uuid','mata_kuliah','nama_materi','link_materi', 'tenggat_waktu'],
    //             include:[{
    //                 model: User,
    //                 attributes:['name','email']
    //             }]
    //         });
    //     }else{
    //         response = await Materi.findOne({
    //             attributes:['uuid','mata_kuliah','nama_materi','link_materi', 'tenggat_waktu'],
    //             where:{
    //                 userId: req.userId
    //             },
    //             include:[{
    //                 model: User,
    //                 attributes:['name']
    //             }]
    //         });
    //     }
    //     res.status(200).json(response);
    // } catch (error) {
    //     res.status(500).json({msg: error.message});
    // }
}

export const createJadwalDosen = async(req, res) =>{
    const {mata_kuliah, kelas, sks, ruang, hari, waktu} = req.body;
    try {
        await JadwalDosen.create({
            mata_kuliah: mata_kuliah,
            kelas: kelas,
            sks: sks,
            ruang: ruang,
            hari: hari,
            waktu: waktu,
            userId: req.userId
        });
        res.status(201).json({msg: "Jadwal Dosen Berhasil ditambahkan"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateJadwalDosen = (req, res) =>{
    
}

export const deleteJadwalDosen = (req, res) =>{
    
}