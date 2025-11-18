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
  'pizza box': 'It depends. If the cardboard is clean, it can be recycled. If it has grease or food residue, it should be composted or thrown away.',
  'newspaper': 'Yes, newspapers are recyclable. Keep them dry and clean.',
  'magazines': 'Yes, magazines are recyclable, including the glossy pages.',
  'milk jug': 'Yes, milk jugs (HDPE #2) are recyclable. Rinse them out and leave the cap on if your local program allows.',
  'tin can': 'Yes, tin cans (steel) are recyclable. Rinse them out before recycling.',
  'light bulb': 'It depends on the type. Incandescent bulbs go in the trash. Fluorescent and LED bulbs should be taken to a hazardous waste facility.',
  'tires': 'Tires are not recyclable in curbside bins. Take them to a tire retailer or a special collection event.',
  'clothing': 'Clothing in good condition can be donated. Otherwise, some textile recycling programs exist, but it is not for the curbside bin.',
  'food scraps': 'Food scraps are not recyclable but can be composted.',
  'yard waste': 'Yard waste like leaves and branches can often be collected for composting, but not in the recycling bin.',
  'paint': 'Latex paint can be dried out and thrown in the trash. Oil-based paint is hazardous waste and needs special disposal.',
  'aerosol cans': 'Empty aerosol cans can be recycled with other metals. If not empty, they are hazardous waste.',
  'scrap metal': 'Scrap metal can be recycled at a scrap yard, not in your curbside bin.',
  'books': 'Paperback books can be recycled. For hardcover books, remove the cover before recycling the pages.',
  'juice cartons': 'Yes, juice cartons are often recyclable. Check with your local program.',
  'yogurt cups': 'It depends on the plastic type. Check the number on the bottom and your local guidelines.',
  'shampoo bottles': 'Yes, shampoo bottles are typically recyclable. Rinse them out first.',
  'cereal boxes': 'Yes, cereal boxes are recyclable. Flatten them and remove the plastic liner.',
  'egg cartons': 'Cardboard egg cartons are recyclable or compostable. Styrofoam and plastic ones are usually not.',
  'plastic toys': 'Plastic toys are often made of mixed plastics and are not recyclable in curbside bins. Donate if in good condition.',
  'bubble wrap': 'Bubble wrap is not recyclable in curbside bins. Some stores have plastic film drop-offs.',
  'coffee cups': 'Most single-use coffee cups are not recyclable due to the plastic lining. The cardboard sleeve is recyclable.',
  'lids': 'Plastic lids can be tricky. Check with your local program if they should be on or off the container.',
  'plastic utensils': 'No, plastic utensils are generally not recyclable.',
  'paper towels': 'No, used paper towels are not recyclable. They can be composted.',
  'napkins': 'No, used napkins are not recyclable. They can be composted.',
  'hazardous waste': 'Hazardous waste like chemicals and pesticides needs to be taken to a special facility.'
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
