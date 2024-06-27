"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("que_description", [
      {
        que_category_id: 1,
        description: "Pernahkah anak Anda dioperasi ?",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 1,
        description:
          "Pernahkah anak Anda mengalami penyakit berat yang mengharuskan ia dirawat di RS ?",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 1,
        description:
          "Apakah anak Anda mempunyai alergi terhadap makanan ? Jelaskan",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 1,
        description:
          "Apakah anak Anda mempunyai alergi tertentu selain makanan ? Jelaskan",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 1,
        description: "Apakah anak Anda dalam masa pengobatan ? Jelaskan",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 1,
        description:
          "Apakah anak Anda pernah mengikuti pemeriksaan psikologis ? Jelaskan",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 1,
        description: "Apakah anak Anda mempunyai gangguan perkembangan ?",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 2,
        description: "Kemampuan penglihatan",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 2,
        description: "Kemampuan pendengaran",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 2,
        description: "Kemampuan bergerak",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 3,
        description: "Dalam kehidupan sehari-hari, anak lebih dekat dengan",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 3,
        description:
          "Anak membicarakan masalah/pengalaman (sehari-hari/khusus) lebih banyak dengan ?",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 3,
        description: "Kekuatan ananda",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 3,
        description: "Prestasi yang pernah diraih",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 3,
        description: "Kelemahan ananda",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 3,
        description: "Masalah/keluhan anak, menurut orang tua",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 3,
        description:
          "Jelaskan sifat/sikap/kebiasaan anak, ia (dalam kesehariannya) tergolong anak yang seperti apa",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 3,
        description:
          "Bagaimanakah anak dalam pergaulan sehari-hari (dengan teman di sekolah/di lingkungan rumah/dengan saudara/di lingkungan orang dewasa)",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 3,
        description:
          "Menurut Anda, anak terlihat memiliki kecenderungan untuk berteman dengan teman yang seperti apa",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 3,
        description:
          "Saat bersama temannya, anak cenderung menunjukkan sikap memimpin/pengikut ?",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 3,
        description: "Aturan apa saja yang orangtua terapkan di rumah",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 3,
        description:
          "Apakah anak Anda pernah melanggar aturan orangtua/pengasuh ? Dalam hal ?",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 3,
        description:
          "Apakah anak Anda pernah melanggar aturan di sekolah ? Dalam hal ?",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 3,
        description: "Bagaimana kepatuhan anak terhadap orangtua di rumah?",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 3,
        description: "Bagaimana kepatuhan anak terhadap guru di sekolah ?",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 3,
        description:
          "Bagaimana tanggung jawab anak terhadap tugas, baik di rumah maupun di sekolah ?",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 3,
        description:
          "Bagaimana kemandirian anak ketika di rumah dan di sekolah ? (misal : makan, mandi, buang air, melepas/memakai pakaian, dll)",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 3,
        description:
          "Bagaimana kebiasaan kerjanya ? Misalnya teliti, ulet, rapi, ceroboh, cepat menyerah menghadapi kesulitan,dll",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 3,
        description:
          "Penerapan pendidikan agama di rumah dilakukan oleh siapa dan apa saja yang diterapkan ?",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 3,
        description:
          "Apakah kegiatan anak sehari-hari selain sekolah ? Siapa yang mendampingi ?",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 3,
        description:
          "Aktivitas apa saja yang Anda lakukan bersama anak ketika di rumah atau di luar rumah ? (misalnya main bersama, membaca buku, bersepeda, dll)",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 4,
        description:
          "Alasan memilih SADE (silakan centang, boleh memilih lebih dari 1)",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 4,
        description:
          "Program di SADE apa saja yang sudah Anda ketahui (silakan centang, boleh memilih lebih dari 1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 4,
        description:
          "Apakah Anda bersedia menerima konsep sekolah yang memfasilitasi perkembangan jasmani, kemampuan berfikir, dan sosialemosi secara seimbang ?",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 4,
        description:
          "Apakah Anda setuju dengan pembiasaan pemberian variasi makanan sejak kecil ?",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 4,
        description:
          "Apakah Anda bersedia untuk tidak menjadikan nilai angka dan ranking sebagai prioritas tujuan belajar ?",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 4,
        description: "Apakah tujuan pendidikan bagi anak Anda",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 4,
        description:
          "Tuliskan angka (1-4 di dalam tanda kurung) urutan prioritas faktor penting dalam pendidikan menurut Anda. (1=paling penting; setiap angka hanya muncul 1x)",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 4,
        description:
          "Tuliskan angka (1-8 di dalam tanda kurung)urutan prioritas Anda mengenai keterampilan apa yang ingin dimiliki oleh ananda. (1=paling penting; setiap angka hanya muncul 1x))",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 4,
        description:
          "Apakah Anda bersedia mengikuti ketentuan kenaikan Bea Guru (SPP) per tahun sebesar inflasi nasional di tahun berjalan ?",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 4,
        description:
          "Apakah Anda bersedia menerima konsekuensi biaya KBM (Kegiatan Belajar Mengajar) yang semakin besar di level kelas yang lebih tinggi terkait target pembelajaran yang semakin kompleks ?",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 4,
        description:
          "Apakah Anda bersedia untuk tidak menjadikan nilai angka dan ranking sebagai prioritas tujuan pendidikan ?",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 5,
        description:
          "Kemampuan yang dikuasai dan dapat dibagi pada komunitas SADe",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        que_category_id: 5,
        description:
          "Lembaga yang dapat diakses untuk keperluan penggalangan dana",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("que_description", null, {});
  },
};
