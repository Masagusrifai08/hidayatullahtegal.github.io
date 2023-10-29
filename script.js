const tambah=document.querySelector('#tambah');
const simpan=document.querySelector('#simpan');
const hapus=document.querySelector('#hapus');
const hasil=document.querySelector('.hasil');

if(localStorage.getItem('data')==null){
  localStorage.setItem('data','[]');
}
window.onload= () => {
  if(localStorage.getItem('data') !=null){
    hasil.innerHTML=JSON.parse(localStorage.getItem('data'));
   }
  }
  simpan.onclick = () => {
    var penyimpanan=JSON.parse(localStorage.getItem('data'));
    penyimpanan.push(tambah.value);
  
  localStorage.setItem('data',JSON.stringify(penyimpanan));
  hasil.innerHTML=JSON.parse(localStorage.getItem('data'));
  tambah.value='';
  tambah.focus();
}
hapus.onclick=() => {
  localStorage.clear('data');
  window.location.reload();
}
//show hide fulltext artikel
const tblArtikel=document.querySelector('#tbl-artikel');
const artikel=document.querySelector('.kolom-utama');
tblArtikel.addEventListener('click', () => {
 artikel.classList.toggle('fulltext');
});

//show hide menu artikel
const tblMenu1= document.querySelector('#tma1');
const tblMenu2= document.querySelector('#tma2');
const katArtikel= document.querySelector('.sidebar-satu');
const judArtikel= document.querySelector('.sidebar-dua');
tblMenu1.onclick= () => {
  katArtikel.classList.toggle('sidebar1-toggle');
  tblMenu1.classList.toggle('tblsidebar1-toggle');
}
tblMenu2.onclick= () => {
  judArtikel.classList.toggle('sidebar2-toggle')
  tblMenu2.classList.toggle('tblsidebar2-toggle');
}

//animasi scroll
const layanimasi1=document.querySelector('.layanansatu');
const layanimasi2=document.querySelector('.layanandua');
const layanimasi3=document.querySelector('.layanantiga');
window.addEventListener('scroll', () => {
  layanimasi1.classList.add('show');
  layanimasi2.classList.add('show');
  layanimasi3.classList.add('show');
})