var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DesaPringsewu_AR_1 = new ol.format.GeoJSON();
var features_DesaPringsewu_AR_1 = format_DesaPringsewu_AR_1.readFeatures(json_DesaPringsewu_AR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesaPringsewu_AR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesaPringsewu_AR_1.addFeatures(features_DesaPringsewu_AR_1);
var lyr_DesaPringsewu_AR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DesaPringsewu_AR_1, 
                style: style_DesaPringsewu_AR_1,
                popuplayertitle: 'Desa Pringsewu_AR',
                interactive: true,
    title: 'Desa Pringsewu_AR<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_0.png" /> Adiluwih<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_1.png" /> Agung Timur<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_2.png" /> Ambarawa<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_3.png" /> Ambarawa Barat<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_4.png" /> Ambarawa Timur<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_5.png" /> Babakan<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_6.png" /> Balai Rejo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_7.png" /> Bandung Baru<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_8.png" /> Bandung Baru Barat<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_9.png" /> Bangun Sari<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_10.png" /> Banjar Agung Ilir<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_11.png" /> Banjarejo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_12.png" /> Banjarmasin<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_13.png" /> Banyu Urip<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_14.png" /> Banyumas<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_15.png" /> Banyuwangi<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_16.png" /> Batu Tegi<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_17.png" /> Baturaja<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_18.png" /> Bayas Jaya<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_19.png" /> Binjai Wangi<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_20.png" /> Blitarejo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_21.png" /> Bulokarto<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_22.png" /> Bulurejo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_23.png" /> Bumi Arum<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_24.png" /> Bumi Ayu<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_25.png" /> Bumi Ratu<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_26.png" /> Bumi Rejo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_27.png" /> Candi Retno<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_28.png" /> Datar Lebuay<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_29.png" /> Enggal Rejo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_30.png" /> Fajar Agung<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_31.png" /> Fajar Agung Barat<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_32.png" /> Fajar Baru<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_33.png" /> Fajar Mulia<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_34.png" /> Fajaresuk<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_35.png" /> Gading Rejo Timur<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_36.png" /> Gading Rejo Utara<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_37.png" /> Gadingrejo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_38.png" /> Ganjaran<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_39.png" /> Gedung Tataan<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_40.png" /> Gemah Ripah<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_41.png" /> Giri Tunggal<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_42.png" /> Gumuk Mas<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_43.png" /> Gumukrejo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_44.png" /> Gunung Kasih<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_45.png" /> Gunung Raya<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_46.png" /> Gunung Rejo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_47.png" /> Gunung Sari<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_48.png" /> Gunung Terang<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_49.png" /> Jati Agung<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_50.png" /> Kacamarga<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_51.png" /> Karang Rejo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_52.png" /> Karangsari<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_53.png" /> Kedaung<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_54.png" /> Kediri<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_55.png" /> Kejadian Lom<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_56.png" /> Kemilin<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_57.png" /> Keputran<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_58.png" /> Kertasana<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_59.png" /> Klaten<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_60.png" /> Kota Batu<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_61.png" /> Kresno Mulyo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_62.png" /> Kuta Waringin<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_63.png" /> Kutoarjo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_64.png" /> Lugusari<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_65.png" /> Lumbirejo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_66.png" /> Mada Jaya<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_67.png" /> Madaraya<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_68.png" /> Margakaya<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_69.png" /> Margo Rejo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_70.png" /> Margodadi<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_71.png" /> Margosari<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_72.png" /> Mataram<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_73.png" /> Mulyo Rejo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_74.png" /> Neglasari<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_75.png" /> Nusa Wungu<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_76.png" /> Padang Cermin<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_77.png" /> Padang Ratu<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_78.png" /> Padang Rejo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_79.png" /> Pagelaran<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_80.png" /> Paguyuban<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_81.png" /> Pamenang<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_82.png" /> Pampangan<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_83.png" /> Pandan Sari<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_84.png" /> Pandan Sari Selatan<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_85.png" /> Pandan Surat<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_86.png" /> Panggung Rejo Utara<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_87.png" /> Panggungrejo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_88.png" /> Panjerejo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_89.png" /> Panutan<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_90.png" /> Pardasuka<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_91.png" /> Pardasuka Selatan<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_92.png" /> Pardasuka Timur<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_93.png" /> Parerejo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_94.png" /> Pasir Ukir<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_95.png" /> Patoman<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_96.png" /> Pematang Nebak<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_97.png" /> Penengahan<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_98.png" /> Podomoro<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_99.png" /> Podosari<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_100.png" /> Ponco Kresno<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_101.png" /> Pringsewu Barat<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_102.png" /> Pringsewu Selatan<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_103.png" /> Pringsewu Timur<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_104.png" /> Pringsewu Utara<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_105.png" /> Puji Harjo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_106.png" /> Pujo Rahayu<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_107.png" /> Pujodadi<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_108.png" /> Purwodadi<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_109.png" /> Purworejo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_110.png" /> Rantau Tijang<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_111.png" /> Rejo Sari<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_112.png" /> Rowo Rejo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_113.png" /> Selapan<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_114.png" /> Sendang Agung<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_115.png" /> Sendang Baru<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_116.png" /> Sendang Mulyo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_117.png" /> Sendang Rejo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_118.png" /> Sendang Retno<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_119.png" /> Sidodadi<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_120.png" /> Sidoharjo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_121.png" /> Sidomulyo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_122.png" /> Siliwangi<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_123.png" /> Sinar Baru<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_124.png" /> Sinar Baru Timur<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_125.png" /> Sinar Mulya<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_126.png" /> Sinar Petir<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_127.png" /> Sinarwayah<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_128.png" /> Sindang Garut<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_129.png" /> Sri Rahayu<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_130.png" /> Sri Way Langsep<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_131.png" /> Srikaton<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_132.png" /> Sriwedari<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_133.png" /> Sriwungu<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_134.png" /> Suka Agung<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_135.png" /> Suka Jaya<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_136.png" /> Suka Negeri<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_137.png" /> Suka Ratu<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_138.png" /> Suka Wangi<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_139.png" /> Sukajadi<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_140.png" /> Sukamara<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_141.png" /> Sukamulya<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_142.png" /> Sukoharjo I<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_143.png" /> Sukoharjo II<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_144.png" /> Sukoharjo III<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_145.png" /> Sukoharjo III Barat<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_146.png" /> Sukoharjo IV<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_147.png" /> Sukoharum<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_148.png" /> Sukorejo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_149.png" /> Sukoyoso<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_150.png" /> Sumber Agung<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_151.png" /> Sumber Bandung<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_152.png" /> Sumber Rejo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_153.png" /> Talang Lebar<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_154.png" /> Tambah Rejo Barat<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_155.png" /> Tambahrejo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_156.png" /> Tangkit Serdang<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_157.png" /> Tanjung Agung<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_158.png" /> Tanjung Anom<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_159.png" /> Tanjung Dalom<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_160.png" /> Tanjung Kemala<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_161.png" /> Tanjung Rusia<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_162.png" /> Tanjung Rusia Timur<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_163.png" /> Tegalsari<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_164.png" /> Tiuh Memon<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_165.png" /> Totokarto<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_166.png" /> Tri Rahayu<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_167.png" /> Tri Tunggal Mulya<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_168.png" /> Tulung Agung<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_169.png" /> Tunggul Pawenang<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_170.png" /> Waluyojati<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_171.png" /> Warga Mulyo<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_172.png" /> Waringin Sari Timur<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_173.png" /> Waringinsari Barat<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_174.png" /> Wates<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_175.png" /> Wates Selatan<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_176.png" /> Wates Timur<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_177.png" /> Way Kunir<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_178.png" /> Way Layap<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_179.png" /> Way Ngison<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_180.png" /> Waya Krui<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_181.png" /> Wayakrui<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_182.png" /> Wonodadi<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_183.png" /> Wonodadi Utara<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_184.png" /> Wonosari<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_185.png" /> Yogyakarta<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_186.png" /> Yogyakarta Selatan<br />\
    <img src="styles/legend/DesaPringsewu_AR_1_187.png" /> <br />' });
var format_Pemukiman_2 = new ol.format.GeoJSON();
var features_Pemukiman_2 = format_Pemukiman_2.readFeatures(json_Pemukiman_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_2.addFeatures(features_Pemukiman_2);
var lyr_Pemukiman_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemukiman_2, 
                style: style_Pemukiman_2,
                popuplayertitle: 'Pemukiman',
                interactive: true,
                title: '<img src="styles/legend/Pemukiman_2.png" /> Pemukiman'
            });
var format_JalanDesa_3 = new ol.format.GeoJSON();
var features_JalanDesa_3 = format_JalanDesa_3.readFeatures(json_JalanDesa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDesa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDesa_3.addFeatures(features_JalanDesa_3);
var lyr_JalanDesa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDesa_3, 
                style: style_JalanDesa_3,
                popuplayertitle: 'Jalan Desa',
                interactive: false,
    title: 'Jalan Desa<br />\
    <img src="styles/legend/JalanDesa_3_0.png" /> Jalan Lain<br />' });
var format_JalananPringsewu_4 = new ol.format.GeoJSON();
var features_JalananPringsewu_4 = format_JalananPringsewu_4.readFeatures(json_JalananPringsewu_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalananPringsewu_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalananPringsewu_4.addFeatures(features_JalananPringsewu_4);
var lyr_JalananPringsewu_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalananPringsewu_4, 
                style: style_JalananPringsewu_4,
                popuplayertitle: 'Jalanan Pringsewu',
                interactive: false,
    title: 'Jalanan Pringsewu<br />\
    <img src="styles/legend/JalananPringsewu_4_0.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JalananPringsewu_4_1.png" /> Jalan Lokal<br />' });
var format_Bendungan_5 = new ol.format.GeoJSON();
var features_Bendungan_5 = format_Bendungan_5.readFeatures(json_Bendungan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bendungan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bendungan_5.addFeatures(features_Bendungan_5);
var lyr_Bendungan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bendungan_5, 
                style: style_Bendungan_5,
                popuplayertitle: 'Bendungan',
                interactive: true,
                title: '<img src="styles/legend/Bendungan_5.png" /> Bendungan'
            });
var format_JALANPROVINSI_LN_LAMPUNG_6 = new ol.format.GeoJSON();
var features_JALANPROVINSI_LN_LAMPUNG_6 = format_JALANPROVINSI_LN_LAMPUNG_6.readFeatures(json_JALANPROVINSI_LN_LAMPUNG_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALANPROVINSI_LN_LAMPUNG_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALANPROVINSI_LN_LAMPUNG_6.addFeatures(features_JALANPROVINSI_LN_LAMPUNG_6);
var lyr_JALANPROVINSI_LN_LAMPUNG_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALANPROVINSI_LN_LAMPUNG_6, 
                style: style_JALANPROVINSI_LN_LAMPUNG_6,
                popuplayertitle: 'JALANPROVINSI_LN_LAMPUNG',
                interactive: false,
                title: '<img src="styles/legend/JALANPROVINSI_LN_LAMPUNG_6.png" /> JALANPROVINSI_LN_LAMPUNG'
            });
var format_JALANNASIONAL_LN_LAMPUNG_7 = new ol.format.GeoJSON();
var features_JALANNASIONAL_LN_LAMPUNG_7 = format_JALANNASIONAL_LN_LAMPUNG_7.readFeatures(json_JALANNASIONAL_LN_LAMPUNG_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALANNASIONAL_LN_LAMPUNG_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALANNASIONAL_LN_LAMPUNG_7.addFeatures(features_JALANNASIONAL_LN_LAMPUNG_7);
var lyr_JALANNASIONAL_LN_LAMPUNG_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALANNASIONAL_LN_LAMPUNG_7, 
                style: style_JALANNASIONAL_LN_LAMPUNG_7,
                popuplayertitle: 'JALANNASIONAL_LN_LAMPUNG',
                interactive: false,
                title: '<img src="styles/legend/JALANNASIONAL_LN_LAMPUNG_7.png" /> JALANNASIONAL_LN_LAMPUNG'
            });
var format_JALAN_TOL_LN_8 = new ol.format.GeoJSON();
var features_JALAN_TOL_LN_8 = format_JALAN_TOL_LN_8.readFeatures(json_JALAN_TOL_LN_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_TOL_LN_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_TOL_LN_8.addFeatures(features_JALAN_TOL_LN_8);
var lyr_JALAN_TOL_LN_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_TOL_LN_8, 
                style: style_JALAN_TOL_LN_8,
                popuplayertitle: 'JALAN_TOL_LN',
                interactive: false,
                title: '<img src="styles/legend/JALAN_TOL_LN_8.png" /> JALAN_TOL_LN'
            });
var format_BatasAdministrasiKecamatan_9 = new ol.format.GeoJSON();
var features_BatasAdministrasiKecamatan_9 = format_BatasAdministrasiKecamatan_9.readFeatures(json_BatasAdministrasiKecamatan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKecamatan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKecamatan_9.addFeatures(features_BatasAdministrasiKecamatan_9);
var lyr_BatasAdministrasiKecamatan_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiKecamatan_9, 
                style: style_BatasAdministrasiKecamatan_9,
                popuplayertitle: 'Batas Administrasi Kecamatan',
                interactive: false,
    title: 'Batas Administrasi Kecamatan<br />\
    <img src="styles/legend/BatasAdministrasiKecamatan_9_0.png" /> Adiluwih<br />\
    <img src="styles/legend/BatasAdministrasiKecamatan_9_1.png" /> Ambarawa<br />\
    <img src="styles/legend/BatasAdministrasiKecamatan_9_2.png" /> Banyumas<br />\
    <img src="styles/legend/BatasAdministrasiKecamatan_9_3.png" /> Gading Rejo<br />\
    <img src="styles/legend/BatasAdministrasiKecamatan_9_4.png" /> Pagelaran<br />\
    <img src="styles/legend/BatasAdministrasiKecamatan_9_5.png" /> Pagelaran Utara<br />\
    <img src="styles/legend/BatasAdministrasiKecamatan_9_6.png" /> Pardasuka<br />\
    <img src="styles/legend/BatasAdministrasiKecamatan_9_7.png" /> Pringsewu<br />\
    <img src="styles/legend/BatasAdministrasiKecamatan_9_8.png" /> Sukoharjo<br />\
    <img src="styles/legend/BatasAdministrasiKecamatan_9_9.png" /> <br />' });
var format_BatasAdministrasiKabupaten_10 = new ol.format.GeoJSON();
var features_BatasAdministrasiKabupaten_10 = format_BatasAdministrasiKabupaten_10.readFeatures(json_BatasAdministrasiKabupaten_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasiKabupaten_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasiKabupaten_10.addFeatures(features_BatasAdministrasiKabupaten_10);
var lyr_BatasAdministrasiKabupaten_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasiKabupaten_10, 
                style: style_BatasAdministrasiKabupaten_10,
                popuplayertitle: 'Batas Administrasi Kabupaten',
                interactive: false,
                title: '<img src="styles/legend/BatasAdministrasiKabupaten_10.png" /> Batas Administrasi Kabupaten'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_DesaPringsewu_AR_1.setVisible(true);lyr_Pemukiman_2.setVisible(true);lyr_JalanDesa_3.setVisible(true);lyr_JalananPringsewu_4.setVisible(true);lyr_Bendungan_5.setVisible(true);lyr_JALANPROVINSI_LN_LAMPUNG_6.setVisible(true);lyr_JALANNASIONAL_LN_LAMPUNG_7.setVisible(true);lyr_JALAN_TOL_LN_8.setVisible(true);lyr_BatasAdministrasiKecamatan_9.setVisible(true);lyr_BatasAdministrasiKabupaten_10.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DesaPringsewu_AR_1,lyr_Pemukiman_2,lyr_JalanDesa_3,lyr_JalananPringsewu_4,lyr_Bendungan_5,lyr_JALANPROVINSI_LN_LAMPUNG_6,lyr_JALANNASIONAL_LN_LAMPUNG_7,lyr_JALAN_TOL_LN_8,lyr_BatasAdministrasiKecamatan_9,lyr_BatasAdministrasiKabupaten_10];
lyr_DesaPringsewu_AR_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Pemukiman_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'LAYER': 'LAYER', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JalanDesa_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ARHRJL': 'ARHRJL', 'AUTRJL': 'AUTRJL', 'FGSRJL': 'FGSRJL', 'JARRJL': 'JARRJL', 'JPARJL': 'JPARJL', 'KLLRJL': 'KLLRJL', 'KONRJL': 'KONRJL', 'KPMSTR': 'KPMSTR', 'LKONOF': 'LKONOF', 'LKSBSP': 'LKSBSP', 'LKSRTA': 'LKSRTA', 'LLHRRT': 'LLHRRT', 'LOCRJL': 'LOCRJL', 'LBRBHJ': 'LBRBHJ', 'LBRJLN': 'LBRJLN', 'MATRJL': 'MATRJL', 'MEDRJL': 'MEDRJL', 'SPCRJL': 'SPCRJL', 'STARJL': 'STARJL', 'TOLRJL': 'TOLRJL', 'UTKRJL': 'UTKRJL', 'VLCPRT': 'VLCPRT', 'WLYRJL': 'WLYRJL', 'TGL_SK': 'TGL_SK', 'JLNLYG': 'JLNLYG', 'KLSRJL': 'KLSRJL', 'Shape_Leng': 'Shape_Leng', });
lyr_JalananPringsewu_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ARHRJL': 'ARHRJL', 'AUTRJL': 'AUTRJL', 'FGSRJL': 'FGSRJL', 'JARRJL': 'JARRJL', 'JPARJL': 'JPARJL', 'KLLRJL': 'KLLRJL', 'KONRJL': 'KONRJL', 'KPMSTR': 'KPMSTR', 'LKONOF': 'LKONOF', 'LKSBSP': 'LKSBSP', 'LKSRTA': 'LKSRTA', 'LLHRRT': 'LLHRRT', 'LOCRJL': 'LOCRJL', 'LBRBHJ': 'LBRBHJ', 'LBRJLN': 'LBRJLN', 'MATRJL': 'MATRJL', 'MEDRJL': 'MEDRJL', 'SPCRJL': 'SPCRJL', 'STARJL': 'STARJL', 'TOLRJL': 'TOLRJL', 'UTKRJL': 'UTKRJL', 'VLCPRT': 'VLCPRT', 'WLYRJL': 'WLYRJL', 'TGL_SK': 'TGL_SK', 'JLNLYG': 'JLNLYG', 'KLSRJL': 'KLSRJL', 'Shape_Leng': 'Shape_Leng', });
lyr_Bendungan_5.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_JALANPROVINSI_LN_LAMPUNG_6.set('fieldAliases', {'REMARK': 'REMARK', 'LCODE': 'LCODE', 'No_Ruas': 'No_Ruas', 'Nama_Ruas': 'Nama_Ruas', 'Panjang_KM': 'Panjang_KM', 'Status': 'Status', 'Fungsi': 'Fungsi', 'Kab_Kota': 'Kab_Kota', 'Sumber': 'Sumber', 'PMLHRN': 'PMLHRN', 'Shape_Leng': 'Shape_Leng', 'pjg_km': 'pjg_km', });
lyr_JALANNASIONAL_LN_LAMPUNG_7.set('fieldAliases', {'kd_ruas': 'kd_ruas', 'nm_ruas': 'nm_ruas', 'thn_data': 'thn_data', 'status': 'status', 'fungsi': 'fungsi', 'provinsi': 'provinsi', 'km_awal': 'km_awal', 'km_akhir': 'km_akhir', 'panjang': 'panjang', 'tanah_kri': 'tanah_kri', 'macadam': 'macadam', 'aspal': 'aspal', 'rigid': 'rigid', 'kd_prov': 'kd_prov', 'tipe_perke': 'tipe_perke', 'code_lntas': 'code_lntas', 'sk_year': 'sk_year', 'Asp_Mntp': 'Asp_Mntp', 'LEBAR_Avg': 'LEBAR_Avg', 'x_awal': 'x_awal', 'y_awal': 'y_awal', 'x_akhir': 'x_akhir', 'y_akhir': 'y_akhir', 'kd_satker': 'kd_satker', 'KLS_JALAN': 'KLS_JALAN', 'nm_lintas2': 'nm_lintas2', 'kd_balai': 'kd_balai', 'pjg_sk': 'pjg_sk', 'pjg_drp': 'pjg_drp', 'Kab_Kot': 'Kab_Kot', 'LEBAR_Avg1': 'LEBAR_Avg1', 'SBSN_2020': 'SBSN_2020', 'nBalai2019': 'nBalai2019', 'nm_kspn': 'nm_kspn', 'kspn_ket': 'kspn_ket', 'length_sk': 'length_sk', 'satker2020': 'satker2020', 'PCI_2019': 'PCI_2019', 'Pjg_Km': 'Pjg_Km', });
lyr_JALAN_TOL_LN_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id_peta': 'id_peta', 'ruas': 'ruas', 'nama': 'nama', 'jenis': 'jenis', 'panjang': 'panjang', 'status': 'status', 'sta': 'sta', 'awal': 'awal', 'akhir': 'akhir', 'prop': 'prop', 'sumber': 'sumber', 'dasar': 'dasar', 'bujt': 'bujt', 'ppjt': 'ppjt', 'alias': 'alias', 'ket_status': 'ket_status', 'panjang_op': 'panjang_op', 'Shape_Leng': 'Shape_Leng', });
lyr_BatasAdministrasiKecamatan_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BatasAdministrasiKabupaten_10.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'ID_PULAU': 'ID_PULAU', 'UNSUR': 'UNSUR', 'NAMA_UNSUR': 'NAMA_UNSUR', 'KODE_UNSUR': 'KODE_UNSUR', 'NAMA_LOKAL': 'NAMA_LOKAL', 'NAMA_GEO1': 'NAMA_GEO1', 'NAMA_GEO2': 'NAMA_GEO2', 'NAMA_GEO3': 'NAMA_GEO3', 'NAMA_LAIN': 'NAMA_LAIN', 'ASL_BAHASA': 'ASL_BAHASA', 'ARTI_NAMA': 'ARTI_NAMA', 'SEJARAH': 'SEJARAH', 'DESA': 'DESA', 'KECAMATAN': 'KECAMATAN', 'KABUPATEN': 'KABUPATEN', 'PROVINSI': 'PROVINSI', 'NARASUMBER': 'NARASUMBER', 'KETERANGAN': 'KETERANGAN', 'V_kemendag': 'V_kemendag', 'V_BIG': 'V_BIG', 'V_KKP': 'V_KKP', 'V_Pushidro': 'V_Pushidro', 'Tgl_Verif': 'Tgl_Verif', 'VERIFIKASI': 'VERIFIKASI', 'KODE': 'KODE', 'KET': 'KET', 'TELAAH': 'TELAAH', 'TELAAH_KET': 'TELAAH_KET', 'TELAAH_TGL': 'TELAAH_TGL', 'REPOSISI': 'REPOSISI', 'STATUS': 'STATUS', 'LINTANG': 'LINTANG', 'BUJUR': 'BUJUR', 'TELAAH2020': 'TELAAH2020', 'KETETANGAN': 'KETETANGAN', 'CAT': 'CAT', 'STATUS_POL': 'STATUS_POL', 'HASIL_TANG': 'HASIL_TANG', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'Luas_CYC_K': 'Luas_CYC_K', 'Jml_Pend': 'Jml_Pend', 'Luas_Ha': 'Luas_Ha', });
lyr_DesaPringsewu_AR_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Pemukiman_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'LAYER': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JalanDesa_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ARHRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'KPMSTR': 'TextEdit', 'LKONOF': 'TextEdit', 'LKSBSP': 'TextEdit', 'LKSRTA': 'TextEdit', 'LLHRRT': 'TextEdit', 'LOCRJL': 'TextEdit', 'LBRBHJ': 'TextEdit', 'LBRJLN': 'TextEdit', 'MATRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'STARJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'VLCPRT': 'TextEdit', 'WLYRJL': 'TextEdit', 'TGL_SK': 'TextEdit', 'JLNLYG': 'TextEdit', 'KLSRJL': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_JalananPringsewu_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ARHRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'KPMSTR': 'TextEdit', 'LKONOF': 'TextEdit', 'LKSBSP': 'TextEdit', 'LKSRTA': 'TextEdit', 'LLHRRT': 'TextEdit', 'LOCRJL': 'TextEdit', 'LBRBHJ': 'TextEdit', 'LBRJLN': 'TextEdit', 'MATRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'STARJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'VLCPRT': 'TextEdit', 'WLYRJL': 'TextEdit', 'TGL_SK': 'TextEdit', 'JLNLYG': 'TextEdit', 'KLSRJL': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Bendungan_5.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_JALANPROVINSI_LN_LAMPUNG_6.set('fieldImages', {'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'No_Ruas': 'TextEdit', 'Nama_Ruas': 'TextEdit', 'Panjang_KM': 'TextEdit', 'Status': 'TextEdit', 'Fungsi': 'TextEdit', 'Kab_Kota': 'TextEdit', 'Sumber': 'TextEdit', 'PMLHRN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'pjg_km': 'TextEdit', });
lyr_JALANNASIONAL_LN_LAMPUNG_7.set('fieldImages', {'kd_ruas': 'TextEdit', 'nm_ruas': 'TextEdit', 'thn_data': 'TextEdit', 'status': 'TextEdit', 'fungsi': 'TextEdit', 'provinsi': 'TextEdit', 'km_awal': 'TextEdit', 'km_akhir': 'TextEdit', 'panjang': 'TextEdit', 'tanah_kri': 'TextEdit', 'macadam': 'TextEdit', 'aspal': 'TextEdit', 'rigid': 'TextEdit', 'kd_prov': 'TextEdit', 'tipe_perke': 'TextEdit', 'code_lntas': 'TextEdit', 'sk_year': 'TextEdit', 'Asp_Mntp': 'TextEdit', 'LEBAR_Avg': 'TextEdit', 'x_awal': 'TextEdit', 'y_awal': 'TextEdit', 'x_akhir': 'TextEdit', 'y_akhir': 'TextEdit', 'kd_satker': 'TextEdit', 'KLS_JALAN': 'TextEdit', 'nm_lintas2': 'TextEdit', 'kd_balai': 'TextEdit', 'pjg_sk': 'TextEdit', 'pjg_drp': 'TextEdit', 'Kab_Kot': 'TextEdit', 'LEBAR_Avg1': 'TextEdit', 'SBSN_2020': 'TextEdit', 'nBalai2019': 'TextEdit', 'nm_kspn': 'TextEdit', 'kspn_ket': 'TextEdit', 'length_sk': 'TextEdit', 'satker2020': 'TextEdit', 'PCI_2019': 'TextEdit', 'Pjg_Km': 'TextEdit', });
lyr_JALAN_TOL_LN_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'id_peta': 'TextEdit', 'ruas': 'TextEdit', 'nama': 'TextEdit', 'jenis': 'TextEdit', 'panjang': 'TextEdit', 'status': 'TextEdit', 'sta': 'TextEdit', 'awal': 'TextEdit', 'akhir': 'TextEdit', 'prop': 'TextEdit', 'sumber': 'TextEdit', 'dasar': 'TextEdit', 'bujt': 'TextEdit', 'ppjt': 'DateTime', 'alias': 'TextEdit', 'ket_status': 'TextEdit', 'panjang_op': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_BatasAdministrasiKecamatan_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_BatasAdministrasiKabupaten_10.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID_2': 'TextEdit', 'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Join_Count': 'TextEdit', 'TARGET_FID': 'TextEdit', 'ID_PULAU': 'TextEdit', 'UNSUR': 'TextEdit', 'NAMA_UNSUR': 'TextEdit', 'KODE_UNSUR': 'TextEdit', 'NAMA_LOKAL': 'TextEdit', 'NAMA_GEO1': 'TextEdit', 'NAMA_GEO2': 'TextEdit', 'NAMA_GEO3': 'TextEdit', 'NAMA_LAIN': 'TextEdit', 'ASL_BAHASA': 'TextEdit', 'ARTI_NAMA': 'TextEdit', 'SEJARAH': 'TextEdit', 'DESA': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KABUPATEN': 'TextEdit', 'PROVINSI': 'TextEdit', 'NARASUMBER': 'TextEdit', 'KETERANGAN': 'TextEdit', 'V_kemendag': 'TextEdit', 'V_BIG': 'TextEdit', 'V_KKP': 'TextEdit', 'V_Pushidro': 'TextEdit', 'Tgl_Verif': 'TextEdit', 'VERIFIKASI': 'TextEdit', 'KODE': 'TextEdit', 'KET': 'TextEdit', 'TELAAH': 'TextEdit', 'TELAAH_KET': 'TextEdit', 'TELAAH_TGL': 'TextEdit', 'REPOSISI': 'DateTime', 'STATUS': 'TextEdit', 'LINTANG': 'TextEdit', 'BUJUR': 'TextEdit', 'TELAAH2020': 'DateTime', 'KETETANGAN': 'TextEdit', 'CAT': 'TextEdit', 'STATUS_POL': 'TextEdit', 'HASIL_TANG': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'Luas_CYC_K': 'TextEdit', 'Jml_Pend': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_DesaPringsewu_AR_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Pemukiman_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'LAYER': 'no label', 'SHAPE_Length': 'no label', 'SHAPE_Area': 'no label', });
lyr_JalanDesa_3.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ARHRJL': 'no label', 'AUTRJL': 'no label', 'FGSRJL': 'no label', 'JARRJL': 'no label', 'JPARJL': 'no label', 'KLLRJL': 'no label', 'KONRJL': 'no label', 'KPMSTR': 'no label', 'LKONOF': 'no label', 'LKSBSP': 'no label', 'LKSRTA': 'no label', 'LLHRRT': 'no label', 'LOCRJL': 'no label', 'LBRBHJ': 'no label', 'LBRJLN': 'no label', 'MATRJL': 'no label', 'MEDRJL': 'no label', 'SPCRJL': 'no label', 'STARJL': 'no label', 'TOLRJL': 'no label', 'UTKRJL': 'no label', 'VLCPRT': 'no label', 'WLYRJL': 'no label', 'TGL_SK': 'no label', 'JLNLYG': 'no label', 'KLSRJL': 'no label', 'Shape_Leng': 'no label', });
lyr_JalananPringsewu_4.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'ARHRJL': 'no label', 'AUTRJL': 'no label', 'FGSRJL': 'no label', 'JARRJL': 'no label', 'JPARJL': 'no label', 'KLLRJL': 'no label', 'KONRJL': 'no label', 'KPMSTR': 'no label', 'LKONOF': 'no label', 'LKSBSP': 'no label', 'LKSRTA': 'no label', 'LLHRRT': 'no label', 'LOCRJL': 'no label', 'LBRBHJ': 'no label', 'LBRJLN': 'no label', 'MATRJL': 'no label', 'MEDRJL': 'no label', 'SPCRJL': 'no label', 'STARJL': 'no label', 'TOLRJL': 'no label', 'UTKRJL': 'no label', 'VLCPRT': 'no label', 'WLYRJL': 'no label', 'TGL_SK': 'no label', 'JLNLYG': 'no label', 'KLSRJL': 'no label', 'Shape_Leng': 'no label', });
lyr_Bendungan_5.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_JALANPROVINSI_LN_LAMPUNG_6.set('fieldLabels', {'REMARK': 'no label', 'LCODE': 'no label', 'No_Ruas': 'no label', 'Nama_Ruas': 'no label', 'Panjang_KM': 'no label', 'Status': 'no label', 'Fungsi': 'no label', 'Kab_Kota': 'no label', 'Sumber': 'no label', 'PMLHRN': 'no label', 'Shape_Leng': 'no label', 'pjg_km': 'no label', });
lyr_JALANNASIONAL_LN_LAMPUNG_7.set('fieldLabels', {'kd_ruas': 'no label', 'nm_ruas': 'no label', 'thn_data': 'no label', 'status': 'no label', 'fungsi': 'no label', 'provinsi': 'no label', 'km_awal': 'no label', 'km_akhir': 'no label', 'panjang': 'no label', 'tanah_kri': 'no label', 'macadam': 'no label', 'aspal': 'no label', 'rigid': 'no label', 'kd_prov': 'no label', 'tipe_perke': 'no label', 'code_lntas': 'no label', 'sk_year': 'no label', 'Asp_Mntp': 'no label', 'LEBAR_Avg': 'no label', 'x_awal': 'no label', 'y_awal': 'no label', 'x_akhir': 'no label', 'y_akhir': 'no label', 'kd_satker': 'no label', 'KLS_JALAN': 'no label', 'nm_lintas2': 'no label', 'kd_balai': 'no label', 'pjg_sk': 'no label', 'pjg_drp': 'no label', 'Kab_Kot': 'no label', 'LEBAR_Avg1': 'no label', 'SBSN_2020': 'no label', 'nBalai2019': 'no label', 'nm_kspn': 'no label', 'kspn_ket': 'no label', 'length_sk': 'no label', 'satker2020': 'no label', 'PCI_2019': 'no label', 'Pjg_Km': 'no label', });
lyr_JALAN_TOL_LN_8.set('fieldLabels', {'OBJECTID': 'no label', 'id_peta': 'no label', 'ruas': 'no label', 'nama': 'no label', 'jenis': 'no label', 'panjang': 'no label', 'status': 'no label', 'sta': 'no label', 'awal': 'no label', 'akhir': 'no label', 'prop': 'no label', 'sumber': 'no label', 'dasar': 'no label', 'bujt': 'no label', 'ppjt': 'no label', 'alias': 'no label', 'ket_status': 'no label', 'panjang_op': 'no label', 'Shape_Leng': 'no label', });
lyr_BatasAdministrasiKecamatan_9.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BatasAdministrasiKabupaten_10.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Join_Count': 'no label', 'TARGET_FID': 'no label', 'ID_PULAU': 'no label', 'UNSUR': 'no label', 'NAMA_UNSUR': 'no label', 'KODE_UNSUR': 'no label', 'NAMA_LOKAL': 'no label', 'NAMA_GEO1': 'no label', 'NAMA_GEO2': 'no label', 'NAMA_GEO3': 'no label', 'NAMA_LAIN': 'no label', 'ASL_BAHASA': 'no label', 'ARTI_NAMA': 'no label', 'SEJARAH': 'no label', 'DESA': 'no label', 'KECAMATAN': 'no label', 'KABUPATEN': 'no label', 'PROVINSI': 'no label', 'NARASUMBER': 'no label', 'KETERANGAN': 'no label', 'V_kemendag': 'no label', 'V_BIG': 'no label', 'V_KKP': 'no label', 'V_Pushidro': 'no label', 'Tgl_Verif': 'no label', 'VERIFIKASI': 'no label', 'KODE': 'no label', 'KET': 'no label', 'TELAAH': 'no label', 'TELAAH_KET': 'no label', 'TELAAH_TGL': 'no label', 'REPOSISI': 'no label', 'STATUS': 'no label', 'LINTANG': 'no label', 'BUJUR': 'no label', 'TELAAH2020': 'no label', 'KETETANGAN': 'no label', 'CAT': 'no label', 'STATUS_POL': 'no label', 'HASIL_TANG': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', 'Luas_CYC_K': 'no label', 'Jml_Pend': 'no label', 'Luas_Ha': 'no label', });
lyr_BatasAdministrasiKabupaten_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});