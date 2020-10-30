import { Selector } from 'testcafe';

fixture(`Verify to display image `)
  // Load the URL your development server runs on.
  .page('http://localhost:8080');

test('Verify to display images and total count', async testController => {

  const data = await new Selector('#data');
  const card = await new Selector('.card');
  let imageLabelTexts = [
    'Doctors Without Borders Face Coverings (Set of 2)',
    'Doctors Without Borders Thank You Ornaments (Set of 3)',
    'Doctors Without Borders Thank You Catchall',
    'Festive Stripe Dinnerware',
    'Festive Stripe Salad Plate',
    'Festive Stripe Bowl',
    'Crewel Landscape Pillow Cover',
    'Fading Dots Pillow Cover',
    'Raised Velvet Pillow Cover',
    'Cozy Weave Pillow Cover &amp; Throw Set - Stone White'
  ];

  await testController
        .wait(7000)
        .expect(data.exists).ok()
        for(let i = 0; i< imageLabelTexts.length; i++) {
          await testController.expect(card.withText(imageLabelTexts[i]).exists).ok()
        }

  const imgCnt = await new Selector('#data').childElementCount;
  await testController
        .expect(imgCnt).eql(10)  // verify to check total images
});

test('Verify to display image price', async testController => {

  const price = await new Selector('.price');

  await testController
        .expect(price.exists).ok()
   
});

test('Verify to display popup when click on image', async testController => {

  const image = await new Selector('.card');
  const popup = await new Selector('#condition');
  const closeBtn = await new Selector('.closetext');
 
  await testController
        .expect(image.exists).ok()
        .click(image)
        .wait(7000)
        .expect(popup.visible).ok()
        .expect(closeBtn.exists).ok()
        .click(closeBtn)
        .expect(popup.visible).notOk()
});
