"use strict"
const mainSection = document.getElementById('main');
const mainSectionStyle = mainSection.style;

mainSectionStyle.backgroundColor='blue';
mainSectionStyle.padding = '0px';
mainSectionStyle.margin= '0px';
mainSectionStyle.display = 'flex';
mainSectionStyle.color = 'white';

const modalContainer = document.getElementById('modal-container');
const closeBtn = document.getElementById('close');

const button = document.getElementById('displayBtn');
button.addEventListener('click', () => {
  modalContainer.style.display='flex'
});

closeBtn.addEventListener('click', () => {
  modalContainer.style.display='none'
});