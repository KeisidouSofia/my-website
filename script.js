// Scroll smoothly when nav links are clicked
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Recycling checker logic
const checkButton = document.getElementById('check-button');
const itemInput = document.getElementById('item-input');
const responseContainer = document.getElementById('response-container');

const recyclingData = {
  'plastic bottle': 'Yes, plastic bottles can be recycled. Please rinse them and remove the cap.',
  'cardboard box': 'Yes, cardboard boxes are recyclable. Please flatten them before placing them in the bin.',
  'paper': 'Yes, clean paper can be recycled. Avoid recycling paper with food stains.',
  'aluminum can': 'Yes, aluminum cans are recyclable. Please rinse them out.',
  'glass bottle': 'Yes, glass bottles can be recycled. Please rinse them and remove the lids.',
  'electronics': 'Electronics should be taken to a certified e-waste collection center.',
  'batteries': 'Batteries should be taken to a certified e-waste collection center.',
  'styrofoam': 'No, styrofoam is generally not recyclable in curbside bins. Check with your local facility for special drop-off locations.',
  'plastic bag': 'No, plastic bags should not be put in recycling bins. Many grocery stores have collection bins for them.',
  'pizza box': 'It depends. If the cardboard is clean, it can be recycled. If it has grease or food residue, it should be composted or thrown away.'
};

checkButton.addEventListener('click', () => {
  const item = itemInput.value.trim().toLowerCase();
  if (item && recyclingData[item]) {
    responseContainer.innerHTML = `<p>${recyclingData[item]}</p>`;
  } else if (item) {
    responseContainer.innerHTML = `<p>Sorry, we don't have information for "${item}". Please check with your local recycling facility.</p>`;
  } else {
    responseContainer.innerHTML = `<p>Please enter an item to check.</p>`;
  }
});
