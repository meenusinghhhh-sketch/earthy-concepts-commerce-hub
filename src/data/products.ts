import { Product, Bundle, Concept } from '@/types/product';

// Import product images - Teas
import serenTeaImg from '@/assets/products/serene-tea.jpg';
import herTeaImg from '@/assets/products/her-tea.jpg';
import immuneTeaImg from '@/assets/products/immune-tea.jpg';
import diabeTeaImg from '@/assets/products/diabe-tea.jpg';
import radiantTeaImg from '@/assets/products/radiant-tea.jpg';
import heartTeaImg from '@/assets/products/heart-tea.jpg';

// Import product images - Face Masks
import illumaMaskImg from '@/assets/products/illuma-mask.jpg';
import detoxMaskImg from '@/assets/products/detox-mask.jpg';
import ubtanaaMaskImg from '@/assets/products/ubtanaa-mask.jpg';
import radianceMaskImg from '@/assets/products/radiance-mask.jpg';
import scalpCleanseImg from '@/assets/products/scalp-cleanse.jpg';
import bodyCleanseImg from '@/assets/products/body-cleanse.jpg';

// Import product images - Face Mists
import hydraMistImg from '@/assets/products/hydra-mist.jpg';
import roseMistImg from '@/assets/products/rose-mist.jpg';

// Import product images - Oils
import rootLuxeImg from '@/assets/products/root-luxe.jpg';
import rootStrongImg from '@/assets/products/root-strong.jpg';
import morningJasmineImg from '@/assets/products/morning-jasmine.jpg';
import lavenderCalmImg from '@/assets/products/lavender-calm.jpg';
import roseBlissImg from '@/assets/products/rose-bliss.jpg';
import shapeToneImg from '@/assets/products/shape-tone.jpg';
import firmBoostImg from '@/assets/products/firm-boost.jpg';
import saffronBloomImg from '@/assets/products/saffron-bloom.jpg';

// Import product images - Brain/Mind
import stressBalanceImg from '@/assets/products/stress-balance.jpg';
import sleepSupportImg from '@/assets/products/sleep-support.jpg';
import zenFocusImg from '@/assets/products/zen-focus.jpg';
import mindBoostImg from '@/assets/products/mind-boost.jpg';

// Import product images - Hair/Skin
import hairSupportImg from '@/assets/products/hair-support.jpg';
import pureGlowImg from '@/assets/products/pure-glow.jpg';
import clearDermaImg from '@/assets/products/clear-derma.jpg';

// Import product images - Respiratory/Heart/Digestive
import pureHolyBasilImg from '@/assets/products/pure-holy-basil.jpg';
import heartDefenseImg from '@/assets/products/heart-defense.jpg';
import bpCareImg from '@/assets/products/bp-care.jpg';
import gutClearImg from '@/assets/products/gut-clear.jpg';
import gentleGutCleanseImg from '@/assets/products/gentle-gut-cleanse.jpg';
import aloeVeraDigestImg from '@/assets/products/aloe-vera-digest.jpg';
import dailyDetoxImg from '@/assets/products/daily-detox.jpg';
import metaTrimImg from '@/assets/products/meta-trim.jpg';
import refluxaImg from '@/assets/products/refluxa.jpg';

// Import product images - Liver/Blood Sugar/Immune
import livCleanseRitualImg from '@/assets/products/liv-cleanse-ritual.jpg';
import deStoneImg from '@/assets/products/de-stone.jpg';
import glycoBalanceImg from '@/assets/products/glyco-balance.jpg';
import glucoSteadyImg from '@/assets/products/gluco-steady.jpg';
import diabeaseImg from '@/assets/products/diabease.jpg';
import dailyImmunityImg from '@/assets/products/daily-immunity.jpg';
import immuneSafeImg from '@/assets/products/immune-safe.jpg';
import amlaShieldImg from '@/assets/products/amla-shield.jpg';
import immuneCapsulesImg from '@/assets/products/immune-capsules.jpg';

// Import product images - Joints/Bones/Hormonal/Weight/Vitality
import jointFlexSupportImg from '@/assets/products/joint-flex-support.jpg';
import osteoSupportImg from '@/assets/products/osteo-support.jpg';
import herBalanceImg from '@/assets/products/her-balance.jpg';
import femBalanceImg from '@/assets/products/fem-balance.jpg';
import leanFormImg from '@/assets/products/lean-form.jpg';
import metabolicBoosterImg from '@/assets/products/metabolic-booster.jpg';
import bitterGuardImg from '@/assets/products/bitter-guard.jpg';
import manBoostImg from '@/assets/products/man-boost.jpg';
import hisVitalityImg from '@/assets/products/his-vitality.jpg';
import vitalManImg from '@/assets/products/vital-man.jpg';

// Import product images - General Health/Ghee
import shilaPlexImg from '@/assets/products/shila-plex.jpg';
import revivaImg from '@/assets/products/reviva.jpg';
import rejuveDailyImg from '@/assets/products/rejuve-daily.jpg';
import energyBoostImg from '@/assets/products/energy-boost.jpg';
import naturalStaminaImg from '@/assets/products/natural-stamina.jpg';
import goldenCurcuminImg from '@/assets/products/golden-curcumin.jpg';
import allergyEaseImg from '@/assets/products/allergy-ease.jpg';
import moringaVitalImg from '@/assets/products/moringa-vital.jpg';
import mindCalmGhritiImg from '@/assets/products/mind-calm-ghriti.jpg';
import mindfulGhritiImg from '@/assets/products/mindful-ghriti.jpg';
import herGhritiImg from '@/assets/products/her-ghriti.jpg';

export const products: Product[] = [
  // ============= TEAS =============
  {
    id: 'her-tea',
    name: 'HerTea',
    slug: 'her-tea',
    tagline: 'For hormonal balance',
    description: 'Specially crafted for women, this blend supports hormonal balance throughout your cycle with time-tested Ayurvedic herbs.',
    price: 139,
    subscriptionPrice: 118,
    currency: 'AED',
    image: herTeaImg,
    images: [herTeaImg],
    category: 'teas',
    concept: 'womens-balance',
    problemSupports: ['Hormonal balance', 'Cycle support', 'Energy levels'],
    bestTimeToUse: 'Morning or afternoon',
    howToUse: ['Boil 200ml of water', 'Add 1 teaspoon of HerTea', 'Steep for 5-7 minutes', 'Strain and enjoy'],
    ingredients: [
      { name: 'Shatavari', benefit: 'Supports female hormones' },
      { name: 'Ashoka', benefit: 'Traditional cycle support' },
      { name: 'Lodhra', benefit: 'Hormonal wellness' },
      { name: 'Rose petals', benefit: 'Mood support' }
    ],
    whatToExpect: ['Week 1-2: Begin to feel more balanced energy', 'Week 3-4: Notice improved cycle comfort', 'Month 2+: Consistent hormonal balance support'],
    rating: 4.9,
    reviewCount: 312,
    inStock: true,
    isBestseller: true
  },
  {
    id: 'diabe-tea',
    name: 'DiabeTea',
    slug: 'diabe-tea',
    tagline: 'For blood sugar support',
    description: 'A carefully formulated blend to support healthy blood sugar levels and metabolic function as part of a balanced lifestyle.',
    price: 149,
    subscriptionPrice: 127,
    currency: 'AED',
    image: diabeTeaImg,
    images: [diabeTeaImg],
    category: 'teas',
    concept: 'metabolic-balance',
    problemSupports: ['Blood sugar support', 'Metabolic health', 'Energy balance'],
    bestTimeToUse: 'After meals',
    howToUse: ['Boil 200ml of water', 'Add 1 teaspoon of DiabeTea', 'Steep for 7-10 minutes', 'Drink after meals'],
    ingredients: [
      { name: 'Gymnema', benefit: 'Supports healthy glucose' },
      { name: 'Fenugreek', benefit: 'Metabolic support' },
      { name: 'Bitter melon', benefit: 'Blood sugar balance' },
      { name: 'Cinnamon', benefit: 'Natural sweetness regulation' }
    ],
    whatToExpect: ['Week 1-2: Begin metabolic support routine', 'Week 3-4: Notice more stable energy levels', 'Month 2+: Consistent metabolic wellness support'],
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    isBestseller: true
  },
  {
    id: 'serene-tea',
    name: 'SereneTea',
    slug: 'serene-tea',
    tagline: 'For stress & calm',
    description: 'A gentle blend of Ayurvedic herbs designed to support relaxation and promote restful sleep. Perfect for evening rituals.',
    price: 129,
    subscriptionPrice: 109,
    currency: 'AED',
    image: serenTeaImg,
    images: [serenTeaImg],
    category: 'teas',
    concept: 'calm',
    problemSupports: ['Stress relief', 'Better sleep', 'Mental clarity'],
    bestTimeToUse: 'Evening, 30 minutes before bed',
    howToUse: ['Boil 200ml of water', 'Add 1 teaspoon of SereneTea', 'Steep for 5-7 minutes', 'Strain and enjoy warm'],
    ingredients: [
      { name: 'Ashwagandha', benefit: 'Supports stress response' },
      { name: 'Chamomile', benefit: 'Promotes relaxation' },
      { name: 'Brahmi', benefit: 'Supports mental calm' },
      { name: 'Lavender', benefit: 'Soothes the senses' }
    ],
    whatToExpect: ['Week 1-2: Begin to feel more relaxed in the evenings', 'Week 3-4: Notice improved sleep quality', 'Month 2+: Consistent calm and balanced stress response'],
    rating: 4.8,
    reviewCount: 234,
    inStock: true,
    isBestseller: true
  },
  {
    id: 'immune-tea',
    name: 'ImmuneTea',
    slug: 'immune-tea',
    tagline: 'For immunity support',
    description: "A potent blend of immune-supporting herbs to help maintain your body's natural defenses throughout the year.",
    price: 119,
    subscriptionPrice: 101,
    currency: 'AED',
    image: immuneTeaImg,
    images: [immuneTeaImg],
    category: 'teas',
    concept: 'immunity',
    problemSupports: ['Immune support', 'Seasonal wellness', 'Daily protection'],
    bestTimeToUse: 'Morning with breakfast',
    howToUse: ['Boil 200ml of water', 'Add 1 teaspoon of ImmuneTea', 'Steep for 5-7 minutes', 'Add honey if desired'],
    ingredients: [
      { name: 'Tulsi', benefit: 'Adaptogenic immunity support' },
      { name: 'Turmeric', benefit: 'Natural anti-inflammatory' },
      { name: 'Ginger', benefit: 'Digestive and immune support' },
      { name: 'Black pepper', benefit: 'Enhanced absorption' }
    ],
    whatToExpect: ['Week 1-2: Feel more energized daily', 'Week 3-4: Notice improved resilience', 'Month 2+: Consistent immune system support'],
    rating: 4.7,
    reviewCount: 189,
    inStock: true,
    isBestseller: true
  },
  {
    id: 'radiant-tea',
    name: 'RadiantTea',
    slug: 'radiant-tea',
    tagline: 'For skin detox',
    description: 'Beauty from within. This blend supports healthy, glowing skin with herbs traditionally used for complexion and radiance.',
    price: 129,
    subscriptionPrice: 109,
    currency: 'AED',
    image: radiantTeaImg,
    images: [radiantTeaImg],
    category: 'teas',
    concept: 'skin-glow',
    problemSupports: ['Skin radiance', 'Healthy complexion', 'Inner glow'],
    bestTimeToUse: 'Morning on empty stomach',
    howToUse: ['Boil 200ml of water', 'Add 1 teaspoon of RadiantTea', 'Steep for 5-7 minutes', 'Enjoy first thing in the morning'],
    ingredients: [
      { name: 'Manjistha', benefit: 'Blood purification' },
      { name: 'Neem', benefit: 'Clear skin support' },
      { name: 'Aloe vera', benefit: 'Skin hydration' },
      { name: 'Hibiscus', benefit: 'Antioxidant rich' }
    ],
    whatToExpect: ['Week 1-2: Internal cleansing begins', 'Week 3-4: Notice clearer, brighter skin', 'Month 2+: Visible glow and radiance'],
    rating: 4.9,
    reviewCount: 278,
    inStock: true,
    isBestseller: true
  },
  {
    id: 'heart-tea',
    name: 'HeartTea',
    slug: 'heart-tea',
    tagline: 'For heart health',
    description: 'Support your cardiovascular health with this thoughtful blend of heart-friendly Ayurvedic herbs for long-term wellness.',
    price: 149,
    subscriptionPrice: 127,
    currency: 'AED',
    image: heartTeaImg,
    images: [heartTeaImg],
    category: 'teas',
    concept: 'heart-wellness',
    problemSupports: ['Heart health', 'Circulation', 'Long-term wellness'],
    bestTimeToUse: 'Morning or evening',
    howToUse: ['Boil 200ml of water', 'Add 1 teaspoon of HeartTea', 'Steep for 7-10 minutes', 'Drink daily for best results'],
    ingredients: [
      { name: 'Arjuna', benefit: 'Traditional heart tonic' },
      { name: 'Hawthorn', benefit: 'Cardiovascular support' },
      { name: 'Garlic', benefit: 'Circulation support' },
      { name: 'Green tea', benefit: 'Antioxidant benefits' }
    ],
    whatToExpect: ['Week 1-2: Establish heart-healthy routine', 'Week 3-4: Support cardiovascular function', 'Month 2+: Long-term heart wellness support'],
    rating: 4.7,
    reviewCount: 145,
    inStock: true,
    isBestseller: true
  },

  // ============= FACE MASKS =============
  {
    id: 'illuma-mask',
    name: 'IllumaMask',
    slug: 'illuma-mask',
    tagline: 'For skin brightening',
    description: 'A luxurious face mask infused with turmeric and saffron to brighten and illuminate your complexion naturally.',
    price: 159,
    subscriptionPrice: 135,
    currency: 'AED',
    image: illumaMaskImg,
    images: [illumaMaskImg],
    category: 'face-masks',
    concept: 'skin-glow',
    problemSupports: ['Skin brightening', 'Dark spots', 'Uneven tone'],
    bestTimeToUse: 'Evening, 2-3 times per week',
    howToUse: ['Cleanse face thoroughly', 'Apply even layer avoiding eye area', 'Leave for 15-20 minutes', 'Rinse with lukewarm water'],
    ingredients: [
      { name: 'Turmeric', benefit: 'Natural brightening' },
      { name: 'Saffron', benefit: 'Illuminating properties' },
      { name: 'Honey', benefit: 'Hydration and glow' },
      { name: 'Sandalwood', benefit: 'Skin soothing' }
    ],
    whatToExpect: ['Week 1-2: Immediate glow after use', 'Week 3-4: Reduced dark spots', 'Month 2+: Visibly brighter complexion'],
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    isNew: true
  },
  {
    id: 'detox-mask',
    name: 'DetoxMask',
    slug: 'detox-mask',
    tagline: 'For acne control',
    description: 'A deep-cleansing charcoal and neem mask that draws out impurities and helps control acne for clearer skin.',
    price: 149,
    subscriptionPrice: 127,
    currency: 'AED',
    image: detoxMaskImg,
    images: [detoxMaskImg],
    category: 'face-masks',
    concept: 'skin-glow',
    problemSupports: ['Acne control', 'Deep cleansing', 'Pore minimizing'],
    bestTimeToUse: 'Evening, 1-2 times per week',
    howToUse: ['Apply to clean, dry skin', 'Avoid eye and lip area', 'Leave for 10-15 minutes', 'Rinse thoroughly'],
    ingredients: [
      { name: 'Activated Charcoal', benefit: 'Deep pore cleansing' },
      { name: 'Neem', benefit: 'Antibacterial properties' },
      { name: 'Tea Tree', benefit: 'Acne control' },
      { name: 'Kaolin Clay', benefit: 'Oil absorption' }
    ],
    whatToExpect: ['Week 1-2: Reduced oiliness', 'Week 3-4: Fewer breakouts', 'Month 2+: Clearer, balanced skin'],
    rating: 4.7,
    reviewCount: 198,
    inStock: true
  },
  {
    id: 'ubtanaa-mask',
    name: 'UbtanaaMask',
    slug: 'ubtanaa-mask',
    tagline: 'For skin refining',
    description: 'Traditional ubtan formula with sandalwood and gram flour for gentle exfoliation and skin refinement.',
    price: 139,
    subscriptionPrice: 118,
    currency: 'AED',
    image: ubtanaaMaskImg,
    images: [ubtanaaMaskImg],
    category: 'face-masks',
    concept: 'skin-glow',
    problemSupports: ['Skin refining', 'Gentle exfoliation', 'Natural glow'],
    bestTimeToUse: 'Morning or evening, 2-3 times per week',
    howToUse: ['Mix with rose water to form paste', 'Apply in circular motions', 'Leave for 10 minutes', 'Gently scrub and rinse'],
    ingredients: [
      { name: 'Sandalwood', benefit: 'Skin cooling and soothing' },
      { name: 'Gram Flour', benefit: 'Natural exfoliation' },
      { name: 'Turmeric', benefit: 'Brightening' },
      { name: 'Rose Powder', benefit: 'Skin softening' }
    ],
    whatToExpect: ['Week 1-2: Smoother skin texture', 'Week 3-4: Refined pores', 'Month 2+: Radiant, polished skin'],
    rating: 4.9,
    reviewCount: 234,
    inStock: true
  },
  {
    id: 'radiance-mask',
    name: 'RadianceMask',
    slug: 'radiance-mask',
    tagline: 'For even tone',
    description: 'A rose-infused mask with pearl powder for even skin tone and luminous radiance.',
    price: 169,
    subscriptionPrice: 144,
    currency: 'AED',
    image: radianceMaskImg,
    images: [radianceMaskImg],
    category: 'face-masks',
    concept: 'skin-glow',
    problemSupports: ['Even skin tone', 'Radiance', 'Hydration'],
    bestTimeToUse: 'Evening, 2-3 times per week',
    howToUse: ['Apply to clean face', 'Massage gently', 'Leave for 15-20 minutes', 'Rinse with cool water'],
    ingredients: [
      { name: 'Rose Extract', benefit: 'Skin balancing' },
      { name: 'Pearl Powder', benefit: 'Luminosity' },
      { name: 'Licorice', benefit: 'Tone evening' },
      { name: 'Vitamin E', benefit: 'Nourishment' }
    ],
    whatToExpect: ['Week 1-2: Immediate radiance', 'Week 3-4: More even tone', 'Month 2+: Luminous, balanced complexion'],
    rating: 4.8,
    reviewCount: 167,
    inStock: true
  },
  {
    id: 'scalp-cleanse',
    name: 'ScalpCleanse',
    slug: 'scalp-cleanse',
    tagline: 'For scalp health',
    description: 'A purifying scalp mask with bhringraj and amla to detoxify and nourish the scalp for healthier hair growth.',
    price: 149,
    subscriptionPrice: 127,
    currency: 'AED',
    image: scalpCleanseImg,
    images: [scalpCleanseImg],
    category: 'face-masks',
    concept: 'hair-scalp',
    problemSupports: ['Scalp health', 'Hair growth', 'Dandruff control'],
    bestTimeToUse: 'Before hair wash, once a week',
    howToUse: ['Part hair into sections', 'Apply to scalp', 'Massage for 5 minutes', 'Leave for 30 minutes then wash'],
    ingredients: [
      { name: 'Bhringraj', benefit: 'Hair growth support' },
      { name: 'Amla', benefit: 'Scalp nourishment' },
      { name: 'Neem', benefit: 'Scalp cleansing' },
      { name: 'Tea Tree', benefit: 'Dandruff control' }
    ],
    whatToExpect: ['Week 1-2: Cleaner scalp feel', 'Week 3-4: Reduced flakiness', 'Month 2+: Healthier hair growth'],
    rating: 4.6,
    reviewCount: 123,
    inStock: true
  },
  {
    id: 'body-cleanse',
    name: 'BodyCleanse',
    slug: 'body-cleanse',
    tagline: 'For body detox',
    description: 'A full-body detox mask with bentonite clay and herbs to draw out toxins and leave skin feeling renewed.',
    price: 189,
    subscriptionPrice: 161,
    currency: 'AED',
    image: bodyCleanseImg,
    images: [bodyCleanseImg],
    category: 'face-masks',
    concept: 'skin-glow',
    problemSupports: ['Body detox', 'Skin renewal', 'Toxin removal'],
    bestTimeToUse: 'Weekly, before shower',
    howToUse: ['Apply to damp skin', 'Cover body avoiding sensitive areas', 'Leave for 15-20 minutes', 'Rinse in shower'],
    ingredients: [
      { name: 'Bentonite Clay', benefit: 'Toxin absorption' },
      { name: 'Seaweed', benefit: 'Mineral replenishment' },
      { name: 'Eucalyptus', benefit: 'Purifying' },
      { name: 'Coconut Oil', benefit: 'Skin softening' }
    ],
    whatToExpect: ['Week 1-2: Immediate skin renewal', 'Week 3-4: Smoother body skin', 'Month 2+: Detoxified, glowing skin'],
    rating: 4.7,
    reviewCount: 89,
    inStock: true
  },

  // ============= FACE MISTS =============
  {
    id: 'hydra-mist',
    name: 'HydraMist',
    slug: 'hydra-mist',
    tagline: 'For hydration',
    description: 'A refreshing cucumber and aloe face mist for instant hydration and skin cooling throughout the day.',
    price: 99,
    subscriptionPrice: 84,
    currency: 'AED',
    image: hydraMistImg,
    images: [hydraMistImg],
    category: 'face-mists',
    concept: 'skin-glow',
    problemSupports: ['Hydration', 'Skin cooling', 'Refreshment'],
    bestTimeToUse: 'Throughout the day as needed',
    howToUse: ['Hold 6-8 inches from face', 'Close eyes and spray', 'Pat gently to absorb', 'Use over makeup for refresh'],
    ingredients: [
      { name: 'Cucumber Extract', benefit: 'Hydration and cooling' },
      { name: 'Aloe Vera', benefit: 'Soothing and moisturizing' },
      { name: 'Hyaluronic Acid', benefit: 'Deep hydration' },
      { name: 'Vitamin B5', benefit: 'Skin barrier support' }
    ],
    whatToExpect: ['Immediate: Instant hydration', 'Week 1-2: Plumper skin', 'Month 1+: Better hydrated complexion'],
    rating: 4.8,
    reviewCount: 267,
    inStock: true
  },
  {
    id: 'rose-mist',
    name: 'RoseMist',
    slug: 'rose-mist',
    tagline: 'For refreshing hydration',
    description: 'Pure rose water mist for refreshing hydration, makeup setting, and natural skin toning.',
    price: 89,
    subscriptionPrice: 76,
    currency: 'AED',
    image: roseMistImg,
    images: [roseMistImg],
    category: 'face-mists',
    concept: 'skin-glow',
    problemSupports: ['Refreshing', 'Skin toning', 'Makeup setting'],
    bestTimeToUse: 'Morning, evening, or as needed',
    howToUse: ['Spray directly on face', 'Use as toner after cleansing', 'Spray over makeup to set', 'Refrigerate for extra cooling'],
    ingredients: [
      { name: 'Rose Water', benefit: 'Natural toning' },
      { name: 'Rose Extract', benefit: 'Antioxidant protection' },
      { name: 'Glycerin', benefit: 'Moisture retention' },
      { name: 'Witch Hazel', benefit: 'Pore tightening' }
    ],
    whatToExpect: ['Immediate: Fresh, toned skin', 'Week 1-2: Balanced skin', 'Month 1+: Naturally radiant complexion'],
    rating: 4.9,
    reviewCount: 345,
    inStock: true,
    isBestseller: true
  },

  // ============= HAIR OILS =============
  {
    id: 'root-luxe',
    name: 'RootLuxe',
    slug: 'root-luxe',
    tagline: 'For root nourishment',
    description: 'A luxurious hair oil with bhringraj and amla for deep root nourishment and stronger, healthier hair.',
    price: 169,
    subscriptionPrice: 144,
    currency: 'AED',
    image: rootLuxeImg,
    images: [rootLuxeImg],
    category: 'hair-oils',
    concept: 'hair-scalp',
    problemSupports: ['Root nourishment', 'Hair strength', 'Scalp health'],
    bestTimeToUse: 'Night before wash or 1 hour before',
    howToUse: ['Warm oil slightly', 'Apply to scalp and massage', 'Work through hair length', 'Leave overnight or 1 hour'],
    ingredients: [
      { name: 'Bhringraj', benefit: 'Hair growth stimulation' },
      { name: 'Amla', benefit: 'Root strengthening' },
      { name: 'Coconut Oil', benefit: 'Deep conditioning' },
      { name: 'Brahmi', benefit: 'Scalp nourishment' }
    ],
    whatToExpect: ['Week 1-2: Softer, more manageable hair', 'Week 3-4: Reduced hair fall', 'Month 2+: Visibly stronger, healthier hair'],
    rating: 4.8,
    reviewCount: 234,
    inStock: true
  },
  {
    id: 'root-strong',
    name: 'RootStrong',
    slug: 'root-strong',
    tagline: 'For hair strength',
    description: 'Intensive hair strengthening oil with rosemary and castor oil to fortify weak, damaged hair.',
    price: 159,
    subscriptionPrice: 135,
    currency: 'AED',
    image: rootStrongImg,
    images: [rootStrongImg],
    category: 'hair-oils',
    concept: 'hair-scalp',
    problemSupports: ['Hair strength', 'Damage repair', 'Breakage prevention'],
    bestTimeToUse: '2-3 times per week before wash',
    howToUse: ['Apply to dry hair', 'Focus on roots and weak areas', 'Massage thoroughly', 'Leave for 1-2 hours'],
    ingredients: [
      { name: 'Castor Oil', benefit: 'Hair thickening' },
      { name: 'Rosemary', benefit: 'Hair growth stimulation' },
      { name: 'Vitamin E', benefit: 'Damage repair' },
      { name: 'Argan Oil', benefit: 'Shine and strength' }
    ],
    whatToExpect: ['Week 1-2: Reduced breakage', 'Week 3-4: Stronger hair strands', 'Month 2+: Thicker, healthier hair'],
    rating: 4.7,
    reviewCount: 178,
    inStock: true
  },

  // ============= BODY OILS =============
  {
    id: 'morning-jasmine',
    name: 'MorningJasmine',
    slug: 'morning-jasmine',
    tagline: 'For uplifting care',
    description: 'An aromatic jasmine body oil for uplifting morning rituals and all-day skin nourishment.',
    price: 149,
    subscriptionPrice: 127,
    currency: 'AED',
    image: morningJasmineImg,
    images: [morningJasmineImg],
    category: 'body-oils',
    concept: 'calm',
    problemSupports: ['Uplifting', 'Skin nourishment', 'Aromatherapy'],
    bestTimeToUse: 'After morning shower',
    howToUse: ['Apply to damp skin', 'Massage in circular motions', 'Focus on dry areas', 'Allow to absorb'],
    ingredients: [
      { name: 'Jasmine Extract', benefit: 'Mood uplifting' },
      { name: 'Sweet Almond Oil', benefit: 'Deep moisturizing' },
      { name: 'Jojoba Oil', benefit: 'Non-greasy absorption' },
      { name: 'Vitamin E', benefit: 'Skin protection' }
    ],
    whatToExpect: ['Immediate: Soft, fragrant skin', 'Week 1-2: Improved skin texture', 'Month 1+: Deeply nourished skin'],
    rating: 4.8,
    reviewCount: 156,
    inStock: true
  },
  {
    id: 'lavender-calm',
    name: 'LavenderCalm',
    slug: 'lavender-calm',
    tagline: 'For deep calm',
    description: 'A soothing lavender body oil perfect for evening relaxation and promoting restful sleep.',
    price: 149,
    subscriptionPrice: 127,
    currency: 'AED',
    image: lavenderCalmImg,
    images: [lavenderCalmImg],
    category: 'body-oils',
    concept: 'calm',
    problemSupports: ['Deep relaxation', 'Sleep support', 'Stress relief'],
    bestTimeToUse: 'Evening before bed',
    howToUse: ['Warm between palms', 'Apply to body with gentle strokes', 'Focus on tension areas', 'Breathe deeply'],
    ingredients: [
      { name: 'Lavender Essential Oil', benefit: 'Calming and relaxing' },
      { name: 'Chamomile', benefit: 'Stress relief' },
      { name: 'Sesame Oil', benefit: 'Grounding warmth' },
      { name: 'Bergamot', benefit: 'Mood balancing' }
    ],
    whatToExpect: ['Immediate: Calm, relaxed feeling', 'Week 1-2: Better sleep quality', 'Month 1+: Reduced stress levels'],
    rating: 4.9,
    reviewCount: 289,
    inStock: true,
    isBestseller: true
  },
  {
    id: 'rose-bliss',
    name: 'RoseBliss',
    slug: 'rose-bliss',
    tagline: 'For soft radiance',
    description: 'A romantic rose-infused body oil for silky soft skin and a naturally radiant glow.',
    price: 159,
    subscriptionPrice: 135,
    currency: 'AED',
    image: roseBlissImg,
    images: [roseBlissImg],
    category: 'body-oils',
    concept: 'skin-glow',
    problemSupports: ['Soft skin', 'Radiance', 'Romantic fragrance'],
    bestTimeToUse: 'After bath or anytime',
    howToUse: ['Apply to clean skin', 'Massage until absorbed', 'Layer with rose mist', 'Enjoy the lasting fragrance'],
    ingredients: [
      { name: 'Rose Oil', benefit: 'Skin softening' },
      { name: 'Rosehip Oil', benefit: 'Radiance boosting' },
      { name: 'Squalane', benefit: 'Lightweight moisture' },
      { name: 'Rose Geranium', benefit: 'Skin balancing' }
    ],
    whatToExpect: ['Immediate: Silky soft skin', 'Week 1-2: Natural radiance', 'Month 1+: Glowing, supple skin'],
    rating: 4.8,
    reviewCount: 198,
    inStock: true
  },
  {
    id: 'shape-tone',
    name: 'ShapeTone',
    slug: 'shape-tone',
    tagline: 'For reducing cellulite',
    description: 'A toning body oil with coffee and ginger to help reduce the appearance of cellulite and firm the skin.',
    price: 179,
    subscriptionPrice: 152,
    currency: 'AED',
    image: shapeToneImg,
    images: [shapeToneImg],
    category: 'body-oils',
    concept: 'general-health',
    problemSupports: ['Cellulite reduction', 'Skin toning', 'Circulation'],
    bestTimeToUse: 'Morning, after shower',
    howToUse: ['Massage vigorously into problem areas', 'Use circular upward motions', 'Apply daily for best results', 'Combine with dry brushing'],
    ingredients: [
      { name: 'Coffee Extract', benefit: 'Circulation boosting' },
      { name: 'Ginger', benefit: 'Warming and toning' },
      { name: 'Juniper Berry', benefit: 'Detoxifying' },
      { name: 'Grapefruit', benefit: 'Skin firming' }
    ],
    whatToExpect: ['Week 1-2: Improved circulation', 'Week 3-4: Smoother appearance', 'Month 2+: Visibly firmer skin'],
    rating: 4.6,
    reviewCount: 134,
    inStock: true
  },
  {
    id: 'firm-boost',
    name: 'FirmBoost',
    slug: 'firm-boost',
    tagline: 'For toning',
    description: 'An intensive firming body oil with juniper and rosemary to tone and tighten the skin.',
    price: 169,
    subscriptionPrice: 144,
    currency: 'AED',
    image: firmBoostImg,
    images: [firmBoostImg],
    category: 'body-oils',
    concept: 'general-health',
    problemSupports: ['Skin toning', 'Firmness', 'Elasticity'],
    bestTimeToUse: 'Twice daily',
    howToUse: ['Apply to target areas', 'Massage with firm pressure', 'Use upward strokes', 'Be consistent for results'],
    ingredients: [
      { name: 'Juniper Berry', benefit: 'Skin tightening' },
      { name: 'Rosemary', benefit: 'Circulation support' },
      { name: 'Cypress', benefit: 'Toning properties' },
      { name: 'Avocado Oil', benefit: 'Skin elasticity' }
    ],
    whatToExpect: ['Week 1-2: Skin feels firmer', 'Week 3-4: Improved elasticity', 'Month 2+: Visibly toned appearance'],
    rating: 4.5,
    reviewCount: 98,
    inStock: true
  },

  // ============= FACIAL OILS =============
  {
    id: 'saffron-bloom',
    name: 'SaffronBloom',
    slug: 'saffron-bloom',
    tagline: 'For face radiance',
    description: 'A precious saffron-infused facial oil for luminous, golden radiance and anti-aging benefits.',
    price: 229,
    subscriptionPrice: 195,
    currency: 'AED',
    image: saffronBloomImg,
    images: [saffronBloomImg],
    category: 'facial-oils',
    concept: 'skin-glow',
    problemSupports: ['Face radiance', 'Anti-aging', 'Golden glow'],
    bestTimeToUse: 'Evening as final skincare step',
    howToUse: ['Apply 3-4 drops to palm', 'Warm between fingers', 'Press into face and neck', 'Use gentle upward strokes'],
    ingredients: [
      { name: 'Saffron', benefit: 'Radiance and brightening' },
      { name: 'Rose Hip Seed Oil', benefit: 'Anti-aging' },
      { name: 'Argan Oil', benefit: 'Deep nourishment' },
      { name: 'Vitamin C', benefit: 'Skin brightening' }
    ],
    whatToExpect: ['Immediate: Golden glow', 'Week 2-3: Brighter complexion', 'Month 2+: Reduced signs of aging'],
    rating: 4.9,
    reviewCount: 187,
    inStock: true,
    isBestseller: true
  },

  // ============= BRAIN/MIND FORMULATIONS =============
  {
    id: 'stress-balance',
    name: 'StressBalance',
    slug: 'stress-balance',
    tagline: 'For stress relief',
    description: 'An adaptogenic formulation with ashwagandha to help your body manage stress and maintain calm.',
    price: 189,
    subscriptionPrice: 161,
    currency: 'AED',
    image: stressBalanceImg,
    images: [stressBalanceImg],
    category: 'formulations',
    concept: 'calm',
    problemSupports: ['Stress relief', 'Adaptogenic support', 'Calm mind'],
    bestTimeToUse: 'Morning and evening with meals',
    howToUse: ['Take 2 capsules daily', 'With warm water or milk', 'Consistent use for best results', 'Can take with food'],
    ingredients: [
      { name: 'Ashwagandha', benefit: 'Stress adaptation' },
      { name: 'Brahmi', benefit: 'Mental calm' },
      { name: 'Jatamansi', benefit: 'Nervous system support' },
      { name: 'Shankhpushpi', benefit: 'Mind relaxation' }
    ],
    whatToExpect: ['Week 1-2: Better stress response', 'Week 3-4: Calmer disposition', 'Month 2+: Resilient stress management'],
    rating: 4.8,
    reviewCount: 267,
    inStock: true
  },
  {
    id: 'sleep-support',
    name: 'SleepSupport',
    slug: 'sleep-support',
    tagline: 'For sleep quality',
    description: 'A calming formulation to support deep, restful sleep and help you wake refreshed.',
    price: 179,
    subscriptionPrice: 152,
    currency: 'AED',
    image: sleepSupportImg,
    images: [sleepSupportImg],
    category: 'formulations',
    concept: 'calm',
    problemSupports: ['Sleep quality', 'Falling asleep', 'Restfulness'],
    bestTimeToUse: '30 minutes before bed',
    howToUse: ['Take 2 tablets before bed', 'With warm milk or water', 'Create consistent bedtime routine', 'Avoid screens before sleep'],
    ingredients: [
      { name: 'Valerian Root', benefit: 'Sleep induction' },
      { name: 'Chamomile', benefit: 'Relaxation' },
      { name: 'Passionflower', benefit: 'Calm nervous system' },
      { name: 'Ashwagandha', benefit: 'Stress reduction' }
    ],
    whatToExpect: ['Week 1: Easier to fall asleep', 'Week 2-3: Deeper sleep', 'Month 1+: Consistent restful nights'],
    rating: 4.7,
    reviewCount: 234,
    inStock: true
  },
  {
    id: 'zen-focus',
    name: 'ZenFocus',
    slug: 'zen-focus',
    tagline: 'For mental clarity',
    description: 'A brahmi-based single herb supplement for enhanced mental clarity and focused concentration.',
    price: 149,
    subscriptionPrice: 127,
    currency: 'AED',
    image: zenFocusImg,
    images: [zenFocusImg],
    category: 'single-herbs',
    concept: 'brain-mind',
    problemSupports: ['Mental clarity', 'Focus', 'Concentration'],
    bestTimeToUse: 'Morning with breakfast',
    howToUse: ['Take 1-2 capsules daily', 'Best in the morning', 'With water or juice', 'Consistent use recommended'],
    ingredients: [
      { name: 'Brahmi', benefit: 'Cognitive enhancement' },
      { name: 'Gotu Kola', benefit: 'Mental clarity' }
    ],
    whatToExpect: ['Week 1-2: Improved focus', 'Week 3-4: Sharper thinking', 'Month 2+: Enhanced cognitive function'],
    rating: 4.8,
    reviewCount: 178,
    inStock: true
  },
  {
    id: 'mind-boost',
    name: 'MindBoost',
    slug: 'mind-boost',
    tagline: 'For cognitive support',
    description: 'A powerful cognitive support formula with bacopa and ginkgo for memory and brain health.',
    price: 179,
    subscriptionPrice: 152,
    currency: 'AED',
    image: mindBoostImg,
    images: [mindBoostImg],
    category: 'single-herbs',
    concept: 'brain-mind',
    problemSupports: ['Memory', 'Cognitive function', 'Brain health'],
    bestTimeToUse: 'Morning and afternoon',
    howToUse: ['Take 1 capsule twice daily', 'With meals', 'Stay hydrated', 'Allow 4-6 weeks for full effects'],
    ingredients: [
      { name: 'Bacopa Monnieri', benefit: 'Memory enhancement' },
      { name: 'Ginkgo Biloba', benefit: 'Brain circulation' }
    ],
    whatToExpect: ['Week 2-3: Improved recall', 'Month 1: Sharper memory', 'Month 2+: Sustained cognitive support'],
    rating: 4.7,
    reviewCount: 145,
    inStock: true
  },

  // ============= HAIR SUPPORT =============
  {
    id: 'hair-support',
    name: 'HairSupport',
    slug: 'hair-support',
    tagline: 'For hair nutrition',
    description: 'A comprehensive hair nutrition supplement with biotin and herbs for stronger, healthier hair.',
    price: 159,
    subscriptionPrice: 135,
    currency: 'AED',
    image: hairSupportImg,
    images: [hairSupportImg],
    category: 'single-herbs',
    concept: 'hair-scalp',
    problemSupports: ['Hair nutrition', 'Hair strength', 'Hair growth'],
    bestTimeToUse: 'With breakfast',
    howToUse: ['Take 2 tablets daily', 'With food', 'Consistent for 3+ months', 'Pair with hair oil'],
    ingredients: [
      { name: 'Biotin', benefit: 'Hair growth support' },
      { name: 'Bhringraj', benefit: 'Traditional hair tonic' }
    ],
    whatToExpect: ['Month 1: Reduced hair fall', 'Month 2: Stronger hair', 'Month 3+: Visible growth'],
    rating: 4.6,
    reviewCount: 198,
    inStock: true
  },

  // ============= SKIN FORMULATIONS =============
  {
    id: 'pure-glow',
    name: 'PureGlow',
    slug: 'pure-glow',
    tagline: 'For glow & detox',
    description: 'An internal skin radiance formula combining detoxifying herbs for clear, glowing skin from within.',
    price: 169,
    subscriptionPrice: 144,
    currency: 'AED',
    image: pureGlowImg,
    images: [pureGlowImg],
    category: 'formulations',
    concept: 'skin-glow',
    problemSupports: ['Skin glow', 'Internal detox', 'Clear complexion'],
    bestTimeToUse: 'Morning on empty stomach',
    howToUse: ['Take 2 tablets in morning', 'With warm water', 'Before breakfast', 'Stay well hydrated'],
    ingredients: [
      { name: 'Turmeric', benefit: 'Anti-inflammatory glow' },
      { name: 'Neem', benefit: 'Blood purification' },
      { name: 'Manjistha', benefit: 'Skin clarity' },
      { name: 'Aloe Vera', benefit: 'Hydration support' }
    ],
    whatToExpect: ['Week 1-2: Internal cleansing', 'Week 3-4: Clearer skin', 'Month 2+: Natural radiance'],
    rating: 4.8,
    reviewCount: 234,
    inStock: true
  },
  {
    id: 'clear-derma',
    name: 'ClearDerma',
    slug: 'clear-derma',
    tagline: 'For blood detox',
    description: 'A blood purifying formula with manjistha and neem for clear, healthy skin.',
    price: 149,
    subscriptionPrice: 127,
    currency: 'AED',
    image: clearDermaImg,
    images: [clearDermaImg],
    category: 'single-herbs',
    concept: 'skin-glow',
    problemSupports: ['Blood purification', 'Skin clarity', 'Acne support'],
    bestTimeToUse: 'Morning and evening',
    howToUse: ['Take 1 tablet twice daily', 'After meals', 'With water', 'Continue for 2-3 months'],
    ingredients: [
      { name: 'Manjistha', benefit: 'Blood purification' },
      { name: 'Neem', benefit: 'Skin detox' }
    ],
    whatToExpect: ['Week 2-3: Reduced breakouts', 'Month 1: Clearer skin', 'Month 2+: Healthy, clear complexion'],
    rating: 4.7,
    reviewCount: 167,
    inStock: true
  },

  // ============= RESPIRATORY/LUNGS =============
  {
    id: 'pure-holy-basil',
    name: 'PureHolyBasil',
    slug: 'pure-holy-basil',
    tagline: 'For immunity & lungs',
    description: 'Pure Tulsi (Holy Basil) for respiratory health, immunity, and overall wellness.',
    price: 119,
    subscriptionPrice: 101,
    currency: 'AED',
    image: pureHolyBasilImg,
    images: [pureHolyBasilImg],
    category: 'single-herbs',
    concept: 'immunity',
    problemSupports: ['Respiratory health', 'Immunity', 'Stress relief'],
    bestTimeToUse: 'Morning and evening',
    howToUse: ['Take 2 capsules daily', 'With water', 'Can brew as tea', 'Consistent daily use'],
    ingredients: [
      { name: 'Tulsi (Holy Basil)', benefit: 'Adaptogenic immunity support' }
    ],
    whatToExpect: ['Week 1-2: Respiratory comfort', 'Week 3-4: Stronger immunity', 'Month 2+: Overall wellness'],
    rating: 4.9,
    reviewCount: 312,
    inStock: true,
    isBestseller: true
  },

  // ============= HEART WELLNESS =============
  {
    id: 'heart-defense',
    name: 'HeartDefense',
    slug: 'heart-defense',
    tagline: 'For heart wellness',
    description: 'A heart-protective formula with Arjuna for cardiovascular health and circulation support.',
    price: 189,
    subscriptionPrice: 161,
    currency: 'AED',
    image: heartDefenseImg,
    images: [heartDefenseImg],
    category: 'single-herbs',
    concept: 'heart-wellness',
    problemSupports: ['Heart health', 'Circulation', 'Cardiovascular support'],
    bestTimeToUse: 'Morning with breakfast',
    howToUse: ['Take 2 capsules daily', 'With warm water', 'Consistent use important', 'Pair with healthy lifestyle'],
    ingredients: [
      { name: 'Arjuna Bark', benefit: 'Heart muscle support' },
      { name: 'Hawthorn', benefit: 'Cardiovascular health' }
    ],
    whatToExpect: ['Week 2-3: Improved circulation', 'Month 1: Heart wellness support', 'Month 3+: Long-term cardiovascular care'],
    rating: 4.8,
    reviewCount: 145,
    inStock: true
  },
  {
    id: 'bp-care',
    name: 'BPCare',
    slug: 'bp-care',
    tagline: 'For blood pressure',
    description: 'A natural formulation to help maintain healthy blood pressure levels within normal range.',
    price: 179,
    subscriptionPrice: 152,
    currency: 'AED',
    image: bpCareImg,
    images: [bpCareImg],
    category: 'formulations',
    concept: 'heart-wellness',
    problemSupports: ['Blood pressure', 'Heart health', 'Circulation'],
    bestTimeToUse: 'Morning and evening',
    howToUse: ['Take 1 tablet twice daily', 'After meals', 'Monitor BP regularly', 'Consult healthcare provider'],
    ingredients: [
      { name: 'Moringa', benefit: 'Blood pressure support' },
      { name: 'Beetroot', benefit: 'Circulation' },
      { name: 'Arjuna', benefit: 'Heart tonic' },
      { name: 'Garlic', benefit: 'Cardiovascular support' }
    ],
    whatToExpect: ['Week 2-3: Support for healthy BP', 'Month 1: Balanced readings', 'Month 2+: Maintained healthy levels'],
    rating: 4.6,
    reviewCount: 123,
    inStock: true
  },

  // ============= DIGESTIVE SYSTEM =============
  {
    id: 'gut-clear',
    name: 'GutClear',
    slug: 'gut-clear',
    tagline: 'For constipation relief',
    description: 'A gentle yet effective formula with triphala for natural constipation relief and digestive regularity.',
    price: 139,
    subscriptionPrice: 118,
    currency: 'AED',
    image: gutClearImg,
    images: [gutClearImg],
    category: 'formulations',
    concept: 'digestive',
    problemSupports: ['Constipation relief', 'Digestive regularity', 'Gut health'],
    bestTimeToUse: 'Before bed',
    howToUse: ['Take 2 tablets before sleep', 'With warm water', 'Start with lower dose', 'Increase as needed'],
    ingredients: [
      { name: 'Triphala', benefit: 'Gentle cleansing' },
      { name: 'Psyllium Husk', benefit: 'Fiber support' },
      { name: 'Senna', benefit: 'Natural movement' },
      { name: 'Haritaki', benefit: 'Digestive tonic' }
    ],
    whatToExpect: ['Day 1-2: Gentle relief', 'Week 1: Regular movements', 'Month 1+: Healthy digestive rhythm'],
    rating: 4.7,
    reviewCount: 189,
    inStock: true
  },
  {
    id: 'gentle-gut-cleanse',
    name: 'GentleGutCleanse',
    slug: 'gentle-gut-cleanse',
    tagline: 'For mild laxative',
    description: 'A mild herbal laxative with senna for gentle, effective digestive support.',
    price: 99,
    subscriptionPrice: 84,
    currency: 'AED',
    image: gentleGutCleanseImg,
    images: [gentleGutCleanseImg],
    category: 'single-herbs',
    concept: 'digestive',
    problemSupports: ['Mild constipation', 'Gentle cleansing', 'Occasional use'],
    bestTimeToUse: 'As needed, before bed',
    howToUse: ['Take 1-2 tablets as needed', 'With warm water', 'Not for daily use', 'Stay hydrated'],
    ingredients: [
      { name: 'Senna Leaf', benefit: 'Gentle laxative' },
      { name: 'Fennel', benefit: 'Digestive comfort' }
    ],
    whatToExpect: ['6-12 hours: Gentle relief', 'Use as needed: Occasional support'],
    rating: 4.5,
    reviewCount: 134,
    inStock: true
  },
  {
    id: 'aloe-vera-digest',
    name: 'AloeVeraDigest',
    slug: 'aloe-vera-digest',
    tagline: 'For gut lining',
    description: 'Pure aloe vera capsules to soothe and support a healthy gut lining and digestive comfort.',
    price: 129,
    subscriptionPrice: 110,
    currency: 'AED',
    image: aloeVeraDigestImg,
    images: [aloeVeraDigestImg],
    category: 'single-herbs',
    concept: 'digestive',
    problemSupports: ['Gut lining', 'Digestive comfort', 'Stomach soothing'],
    bestTimeToUse: 'Before meals',
    howToUse: ['Take 1 capsule before meals', 'Twice daily', 'With water', 'Consistent use recommended'],
    ingredients: [
      { name: 'Aloe Vera', benefit: 'Gut lining support' }
    ],
    whatToExpect: ['Week 1: Digestive comfort', 'Week 2-3: Soothed stomach', 'Month 1+: Healthy gut lining'],
    rating: 4.6,
    reviewCount: 156,
    inStock: true
  },
  {
    id: 'daily-detox',
    name: 'DailyDetox',
    slug: 'daily-detox',
    tagline: 'For daily cleanse',
    description: 'A gentle daily detox formula to support your body\'s natural cleansing processes.',
    price: 149,
    subscriptionPrice: 127,
    currency: 'AED',
    image: dailyDetoxImg,
    images: [dailyDetoxImg],
    category: 'single-herbs',
    concept: 'digestive',
    problemSupports: ['Daily cleansing', 'Toxin removal', 'Energy support'],
    bestTimeToUse: 'Morning on empty stomach',
    howToUse: ['Take 2 capsules in morning', 'With warm lemon water', 'Before breakfast', 'Drink plenty of water'],
    ingredients: [
      { name: 'Wheatgrass', benefit: 'Chlorophyll cleansing' },
      { name: 'Spirulina', benefit: 'Nutrient-rich detox' }
    ],
    whatToExpect: ['Week 1: Increased energy', 'Week 2-3: Clearer skin', 'Month 1+: Overall wellness'],
    rating: 4.7,
    reviewCount: 178,
    inStock: true
  },
  {
    id: 'meta-trim',
    name: 'MetaTrim',
    slug: 'meta-trim',
    tagline: 'For metabolism & cravings',
    description: 'A metabolism-boosting formula with garcinia to help curb cravings and support weight management.',
    price: 179,
    subscriptionPrice: 152,
    currency: 'AED',
    image: metaTrimImg,
    images: [metaTrimImg],
    category: 'single-herbs',
    concept: 'metabolic-balance',
    problemSupports: ['Metabolism', 'Cravings control', 'Weight support'],
    bestTimeToUse: '30 minutes before meals',
    howToUse: ['Take 1 capsule before meals', 'Twice daily', 'With water', 'Combine with healthy diet'],
    ingredients: [
      { name: 'Garcinia Cambogia', benefit: 'Appetite control' },
      { name: 'Green Tea Extract', benefit: 'Metabolism boost' }
    ],
    whatToExpect: ['Week 1-2: Reduced cravings', 'Week 3-4: Better appetite control', 'Month 2+: Weight management support'],
    rating: 4.5,
    reviewCount: 145,
    inStock: true
  },
  {
    id: 'refluxa',
    name: 'Refluxa',
    slug: 'refluxa',
    tagline: 'For acidity relief',
    description: 'A cooling formula with licorice and cooling herbs to relieve acidity and heartburn naturally.',
    price: 139,
    subscriptionPrice: 118,
    currency: 'AED',
    image: refluxaImg,
    images: [refluxaImg],
    category: 'formulations',
    concept: 'digestive',
    problemSupports: ['Acidity relief', 'Heartburn', 'Stomach comfort'],
    bestTimeToUse: 'After meals or as needed',
    howToUse: ['Chew 1-2 tablets after meals', 'Or when acidity occurs', 'With water if preferred', 'Can take up to 4 daily'],
    ingredients: [
      { name: 'Licorice Root', benefit: 'Stomach coating' },
      { name: 'Fennel', benefit: 'Cooling effect' },
      { name: 'Mint', benefit: 'Digestive soothing' },
      { name: 'Amla', benefit: 'Acidity balance' }
    ],
    whatToExpect: ['Immediate: Relief from acidity', 'Week 1: Reduced frequency', 'Month 1+: Balanced stomach acid'],
    rating: 4.8,
    reviewCount: 234,
    inStock: true
  },

  // ============= LIVER =============
  {
    id: 'liv-cleanse-ritual',
    name: 'LivCleanseRitual',
    slug: 'liv-cleanse-ritual',
    tagline: 'For liver detox',
    description: 'A comprehensive liver detox formula with milk thistle to support liver health and function.',
    price: 189,
    subscriptionPrice: 161,
    currency: 'AED',
    image: livCleanseRitualImg,
    images: [livCleanseRitualImg],
    category: 'capsules',
    concept: 'liver',
    problemSupports: ['Liver detox', 'Liver health', 'Toxin elimination'],
    bestTimeToUse: 'Morning and evening',
    howToUse: ['Take 1 capsule twice daily', 'With meals', 'Stay hydrated', 'Avoid alcohol during detox'],
    ingredients: [
      { name: 'Milk Thistle', benefit: 'Liver protection' },
      { name: 'Dandelion Root', benefit: 'Liver cleansing' },
      { name: 'Kutki', benefit: 'Liver function support' },
      { name: 'Turmeric', benefit: 'Anti-inflammatory' }
    ],
    whatToExpect: ['Week 1-2: Increased energy', 'Week 3-4: Better digestion', 'Month 2+: Optimal liver function'],
    rating: 4.8,
    reviewCount: 167,
    inStock: true
  },
  {
    id: 'de-stone',
    name: 'DeStone',
    slug: 'de-stone',
    tagline: 'For detoxifier & healthy digestion',
    description: 'A detoxifying formula with punarnava to support kidney and liver health naturally.',
    price: 169,
    subscriptionPrice: 144,
    currency: 'AED',
    image: deStoneImg,
    images: [deStoneImg],
    category: 'single-herbs',
    concept: 'liver',
    problemSupports: ['Detoxification', 'Kidney support', 'Healthy digestion'],
    bestTimeToUse: 'Morning on empty stomach',
    howToUse: ['Take 2 tablets in morning', 'With warm water', 'Drink plenty of water daily', 'Continue for 2-3 months'],
    ingredients: [
      { name: 'Punarnava', benefit: 'Kidney support' },
      { name: 'Kulathi', benefit: 'Detoxification' }
    ],
    whatToExpect: ['Week 2-3: Better urinary health', 'Month 1: Kidney support', 'Month 2+: Overall detoxification'],
    rating: 4.6,
    reviewCount: 123,
    inStock: true
  },

  // ============= BLOOD SUGAR =============
  {
    id: 'glyco-balance',
    name: 'GlycoBalance',
    slug: 'glyco-balance',
    tagline: 'For sugar balance & antioxidant',
    description: 'A blood sugar balancing formula with bitter melon and gymnema for healthy glucose levels.',
    price: 179,
    subscriptionPrice: 152,
    currency: 'AED',
    image: glycoBalanceImg,
    images: [glycoBalanceImg],
    category: 'single-herbs',
    concept: 'metabolic-balance',
    problemSupports: ['Blood sugar', 'Glucose balance', 'Antioxidant'],
    bestTimeToUse: 'Before meals',
    howToUse: ['Take 1 tablet before meals', 'Twice daily', 'Monitor blood sugar', 'Combine with healthy diet'],
    ingredients: [
      { name: 'Bitter Melon', benefit: 'Glucose regulation' },
      { name: 'Gymnema', benefit: 'Sugar metabolism' }
    ],
    whatToExpect: ['Week 1-2: More stable energy', 'Week 3-4: Balanced glucose', 'Month 2+: Healthy blood sugar levels'],
    rating: 4.7,
    reviewCount: 189,
    inStock: true
  },
  {
    id: 'gluco-steady',
    name: 'GlucoSteady',
    slug: 'gluco-steady',
    tagline: 'For glucose control',
    description: 'A natural formula with fenugreek and cinnamon to support steady glucose levels throughout the day.',
    price: 169,
    subscriptionPrice: 144,
    currency: 'AED',
    image: glucoSteadyImg,
    images: [glucoSteadyImg],
    category: 'single-herbs',
    concept: 'metabolic-balance',
    problemSupports: ['Glucose control', 'Insulin sensitivity', 'Energy stability'],
    bestTimeToUse: 'With meals',
    howToUse: ['Take 1 capsule with meals', 'Twice daily', 'With water', 'Consistent use important'],
    ingredients: [
      { name: 'Fenugreek', benefit: 'Glucose support' },
      { name: 'Cinnamon', benefit: 'Insulin sensitivity' }
    ],
    whatToExpect: ['Week 1-2: Steadier energy', 'Week 3-4: Better glucose control', 'Month 2+: Maintained healthy levels'],
    rating: 4.6,
    reviewCount: 156,
    inStock: true
  },
  {
    id: 'diabease',
    name: 'Diabease',
    slug: 'diabease',
    tagline: 'For sugar balance',
    description: 'A comprehensive blood sugar support formula with traditional herbs for metabolic wellness.',
    price: 199,
    subscriptionPrice: 169,
    currency: 'AED',
    image: diabeaseImg,
    images: [diabeaseImg],
    category: 'formulations',
    concept: 'metabolic-balance',
    problemSupports: ['Blood sugar', 'Metabolic health', 'Energy balance'],
    bestTimeToUse: 'Morning and evening with meals',
    howToUse: ['Take 1 tablet twice daily', 'With meals', 'Monitor regularly', 'Healthy lifestyle essential'],
    ingredients: [
      { name: 'Jamun Seed', benefit: 'Blood sugar support' },
      { name: 'Karela', benefit: 'Glucose metabolism' },
      { name: 'Methi', benefit: 'Insulin support' },
      { name: 'Neem', benefit: 'Blood purification' }
    ],
    whatToExpect: ['Week 2-3: Better energy levels', 'Month 1: Improved control', 'Month 2+: Balanced metabolic health'],
    rating: 4.8,
    reviewCount: 234,
    inStock: true,
    isBestseller: true
  },

  // ============= IMMUNE SYSTEM =============
  {
    id: 'daily-immunity',
    name: 'DailyImmunity',
    slug: 'daily-immunity',
    tagline: 'For daily defense',
    description: 'A daily immune support formula with giloy and turmeric for year-round protection.',
    price: 149,
    subscriptionPrice: 127,
    currency: 'AED',
    image: dailyImmunityImg,
    images: [dailyImmunityImg],
    category: 'single-herbs',
    concept: 'immunity',
    problemSupports: ['Daily immunity', 'Natural defense', 'Year-round protection'],
    bestTimeToUse: 'Morning with breakfast',
    howToUse: ['Take 2 tablets daily', 'With breakfast', 'Consistent daily use', 'Increase during illness'],
    ingredients: [
      { name: 'Giloy', benefit: 'Immunity boost' },
      { name: 'Turmeric', benefit: 'Anti-inflammatory' }
    ],
    whatToExpect: ['Week 1-2: Stronger resistance', 'Week 3-4: Fewer sick days', 'Month 2+: Robust immune system'],
    rating: 4.8,
    reviewCount: 289,
    inStock: true
  },
  {
    id: 'immune-safe',
    name: 'ImmuneSafe',
    slug: 'immune-safe',
    tagline: 'For immunity',
    description: 'A powerful immunity formula with echinacea and elderberry for enhanced natural defenses.',
    price: 179,
    subscriptionPrice: 152,
    currency: 'AED',
    image: immuneSafeImg,
    images: [immuneSafeImg],
    category: 'formulations',
    concept: 'immunity',
    problemSupports: ['Immunity boost', 'Seasonal wellness', 'Natural defense'],
    bestTimeToUse: 'Morning and evening',
    howToUse: ['Take 1 capsule twice daily', 'With water', 'Increase when exposed', 'Year-round use'],
    ingredients: [
      { name: 'Echinacea', benefit: 'Immune activation' },
      { name: 'Elderberry', benefit: 'Antiviral properties' },
      { name: 'Vitamin C', benefit: 'Immune support' },
      { name: 'Zinc', benefit: 'Cellular immunity' }
    ],
    whatToExpect: ['Week 1: Enhanced defense', 'Week 2-3: Stronger immunity', 'Month 1+: Year-round protection'],
    rating: 4.7,
    reviewCount: 198,
    inStock: true
  },
  {
    id: 'amla-shield',
    name: 'AmlaShield',
    slug: 'amla-shield',
    tagline: 'For antioxidant',
    description: 'Pure amla capsules packed with natural Vitamin C for powerful antioxidant protection.',
    price: 119,
    subscriptionPrice: 101,
    currency: 'AED',
    image: amlaShieldImg,
    images: [amlaShieldImg],
    category: 'single-herbs',
    concept: 'immunity',
    problemSupports: ['Antioxidant', 'Vitamin C', 'Anti-aging'],
    bestTimeToUse: 'Morning with breakfast',
    howToUse: ['Take 2 capsules daily', 'With food', 'Can take up to 4 daily', 'Consistent use'],
    ingredients: [
      { name: 'Amla', benefit: 'Natural Vitamin C source' }
    ],
    whatToExpect: ['Week 1: Increased energy', 'Week 2-3: Healthier skin', 'Month 1+: Strong antioxidant protection'],
    rating: 4.9,
    reviewCount: 312,
    inStock: true,
    isBestseller: true
  },
  {
    id: 'immune-capsules',
    name: 'ImmuneCapsules',
    slug: 'immune-capsules',
    tagline: 'For immunity',
    description: 'A blend of immunity-boosting herbs in convenient capsules for daily immune support.',
    price: 139,
    subscriptionPrice: 118,
    currency: 'AED',
    image: immuneCapsulesImg,
    images: [immuneCapsulesImg],
    category: 'capsules',
    concept: 'immunity',
    problemSupports: ['Immune support', 'Daily protection', 'Wellness'],
    bestTimeToUse: 'Morning',
    howToUse: ['Take 2 capsules daily', 'With water', 'Preferably with food', 'Daily use recommended'],
    ingredients: [
      { name: 'Giloy', benefit: 'Immunity' },
      { name: 'Tulsi', benefit: 'Respiratory health' },
      { name: 'Ashwagandha', benefit: 'Stress-immunity' },
      { name: 'Turmeric', benefit: 'Anti-inflammatory' }
    ],
    whatToExpect: ['Week 1-2: Stronger defense', 'Week 3-4: Better wellness', 'Month 2+: Robust immunity'],
    rating: 4.7,
    reviewCount: 178,
    inStock: true
  },

  // ============= JOINTS & BONES =============
  {
    id: 'joint-flex-support',
    name: 'JointFlexSupport',
    slug: 'joint-flex-support',
    tagline: 'For joint mobility',
    description: 'A joint support formula with boswellia and turmeric for flexibility and comfortable movement.',
    price: 189,
    subscriptionPrice: 161,
    currency: 'AED',
    image: jointFlexSupportImg,
    images: [jointFlexSupportImg],
    category: 'single-herbs',
    concept: 'joints-bones',
    problemSupports: ['Joint mobility', 'Flexibility', 'Comfort'],
    bestTimeToUse: 'Morning and evening',
    howToUse: ['Take 1 tablet twice daily', 'With meals', 'Consistent use for results', 'May take 4-6 weeks'],
    ingredients: [
      { name: 'Boswellia', benefit: 'Joint comfort' },
      { name: 'Turmeric', benefit: 'Anti-inflammatory' }
    ],
    whatToExpect: ['Week 2-3: Reduced stiffness', 'Month 1: Better mobility', 'Month 2+: Comfortable movement'],
    rating: 4.7,
    reviewCount: 189,
    inStock: true
  },
  {
    id: 'osteo-support',
    name: 'OsteoSupport',
    slug: 'osteo-support',
    tagline: 'For bone health',
    description: 'A comprehensive bone health formula with calcium and vitamin D for strong, healthy bones.',
    price: 179,
    subscriptionPrice: 152,
    currency: 'AED',
    image: osteoSupportImg,
    images: [osteoSupportImg],
    category: 'formulations',
    concept: 'joints-bones',
    problemSupports: ['Bone health', 'Calcium support', 'Bone density'],
    bestTimeToUse: 'With meals',
    howToUse: ['Take 1 tablet twice daily', 'With food for absorption', 'Consistent long-term use', 'Pair with exercise'],
    ingredients: [
      { name: 'Calcium', benefit: 'Bone building' },
      { name: 'Vitamin D3', benefit: 'Calcium absorption' },
      { name: 'Vitamin K2', benefit: 'Bone density' },
      { name: 'Magnesium', benefit: 'Bone structure' }
    ],
    whatToExpect: ['Month 1-2: Foundation building', 'Month 3+: Stronger bones', 'Long-term: Maintained bone health'],
    rating: 4.8,
    reviewCount: 156,
    inStock: true
  },

  // ============= WOMEN'S HORMONAL =============
  {
    id: 'her-balance',
    name: 'HerBalance',
    slug: 'her-balance',
    tagline: 'For women wellness',
    description: 'A comprehensive women\'s wellness formula with shatavari for hormonal balance and vitality.',
    price: 179,
    subscriptionPrice: 152,
    currency: 'AED',
    image: herBalanceImg,
    images: [herBalanceImg],
    category: 'formulations',
    concept: 'womens-balance',
    problemSupports: ['Women\'s wellness', 'Hormonal balance', 'Vitality'],
    bestTimeToUse: 'Morning and evening',
    howToUse: ['Take 1 tablet twice daily', 'With meals', 'Consistent monthly use', 'Track with cycle'],
    ingredients: [
      { name: 'Shatavari', benefit: 'Female hormone support' },
      { name: 'Ashoka', benefit: 'Cycle regularity' },
      { name: 'Lodhra', benefit: 'Reproductive health' },
      { name: 'Ashwagandha', benefit: 'Energy and vitality' }
    ],
    whatToExpect: ['Week 2-3: Better energy', 'Month 1: Cycle balance', 'Month 2+: Overall women\'s wellness'],
    rating: 4.8,
    reviewCount: 234,
    inStock: true
  },
  {
    id: 'fem-balance',
    name: 'FemBalance',
    slug: 'fem-balance',
    tagline: 'For hormonal balance',
    description: 'A single-herb formula with vitex for natural hormonal balance and cycle support.',
    price: 149,
    subscriptionPrice: 127,
    currency: 'AED',
    image: femBalanceImg,
    images: [femBalanceImg],
    category: 'single-herbs',
    concept: 'womens-balance',
    problemSupports: ['Hormonal balance', 'Cycle support', 'PMS relief'],
    bestTimeToUse: 'Morning',
    howToUse: ['Take 1 capsule daily', 'In the morning', 'Consistent daily use', 'Allow 3 cycles for full effect'],
    ingredients: [
      { name: 'Vitex', benefit: 'Hormonal balance' },
      { name: 'Dong Quai', benefit: 'Cycle support' }
    ],
    whatToExpect: ['Cycle 1: Beginning balance', 'Cycle 2: Reduced PMS', 'Cycle 3+: Hormonal harmony'],
    rating: 4.7,
    reviewCount: 167,
    inStock: true
  },

  // ============= WEIGHT MANAGEMENT =============
  {
    id: 'lean-form',
    name: 'LeanForm',
    slug: 'lean-form',
    tagline: 'For weight management',
    description: 'A comprehensive weight management formula with green tea and garcinia for healthy weight support.',
    price: 189,
    subscriptionPrice: 161,
    currency: 'AED',
    image: leanFormImg,
    images: [leanFormImg],
    category: 'formulations',
    concept: 'metabolic-balance',
    problemSupports: ['Weight management', 'Metabolism', 'Fat burning'],
    bestTimeToUse: 'Before meals',
    howToUse: ['Take 1 capsule before meals', 'Twice daily', 'With water', 'Combine with exercise'],
    ingredients: [
      { name: 'Green Tea Extract', benefit: 'Metabolism boost' },
      { name: 'Garcinia', benefit: 'Appetite control' },
      { name: 'Guggul', benefit: 'Fat metabolism' },
      { name: 'Triphala', benefit: 'Digestive support' }
    ],
    whatToExpect: ['Week 1-2: Reduced appetite', 'Week 3-4: Increased energy', 'Month 2+: Weight management support'],
    rating: 4.6,
    reviewCount: 198,
    inStock: true
  },
  {
    id: 'metabolic-booster',
    name: 'MetabolicBooster',
    slug: 'metabolic-booster',
    tagline: 'For metabolism',
    description: 'A thermogenic formula with cayenne and ginger to naturally boost metabolism.',
    price: 169,
    subscriptionPrice: 144,
    currency: 'AED',
    image: metabolicBoosterImg,
    images: [metabolicBoosterImg],
    category: 'capsules',
    concept: 'metabolic-balance',
    problemSupports: ['Metabolism', 'Thermogenesis', 'Energy'],
    bestTimeToUse: 'Morning with breakfast',
    howToUse: ['Take 2 capsules with breakfast', 'Not after 2pm', 'With food', 'Stay active'],
    ingredients: [
      { name: 'Cayenne', benefit: 'Thermogenic' },
      { name: 'Ginger', benefit: 'Digestive fire' },
      { name: 'Black Pepper', benefit: 'Absorption' },
      { name: 'Green Tea', benefit: 'Metabolism' }
    ],
    whatToExpect: ['Day 1: Increased warmth', 'Week 1-2: More energy', 'Month 1+: Faster metabolism'],
    rating: 4.5,
    reviewCount: 145,
    inStock: true
  },
  {
    id: 'bitter-guard',
    name: 'BitterGuard',
    slug: 'bitter-guard',
    tagline: 'For metabolism',
    description: 'Pure bitter gourd extract to support healthy metabolism and blood sugar balance.',
    price: 129,
    subscriptionPrice: 110,
    currency: 'AED',
    image: bitterGuardImg,
    images: [bitterGuardImg],
    category: 'single-herbs',
    concept: 'metabolic-balance',
    problemSupports: ['Metabolism', 'Blood sugar', 'Weight support'],
    bestTimeToUse: 'Before meals',
    howToUse: ['Take 1 tablet before meals', 'Twice daily', 'With water', 'Consistent use'],
    ingredients: [
      { name: 'Bitter Gourd (Karela)', benefit: 'Metabolic support' }
    ],
    whatToExpect: ['Week 1-2: Better digestion', 'Week 3-4: Metabolic balance', 'Month 2+: Weight management support'],
    rating: 4.6,
    reviewCount: 134,
    inStock: true
  },

  // ============= MEN'S VITALITY =============
  {
    id: 'man-boost',
    name: 'ManBoost',
    slug: 'man-boost',
    tagline: 'For male hormonal health',
    description: 'A powerful formula with ashwagandha and shilajit for male vitality and hormonal health.',
    price: 199,
    subscriptionPrice: 169,
    currency: 'AED',
    image: manBoostImg,
    images: [manBoostImg],
    category: 'single-herbs',
    concept: 'mens-vitality',
    problemSupports: ['Male hormones', 'Vitality', 'Strength'],
    bestTimeToUse: 'Morning and evening',
    howToUse: ['Take 1 capsule twice daily', 'With milk or water', 'Consistent daily use', 'Exercise regularly'],
    ingredients: [
      { name: 'Ashwagandha', benefit: 'Testosterone support' },
      { name: 'Shilajit', benefit: 'Energy and vitality' }
    ],
    whatToExpect: ['Week 2-3: Increased energy', 'Month 1: Better strength', 'Month 2+: Enhanced vitality'],
    rating: 4.8,
    reviewCount: 234,
    inStock: true
  },
  {
    id: 'his-vitality',
    name: 'HisVitality',
    slug: 'his-vitality',
    tagline: 'For health & enhanced endurance',
    description: 'A comprehensive men\'s formula for enhanced endurance, stamina, and overall vitality.',
    price: 219,
    subscriptionPrice: 186,
    currency: 'AED',
    image: hisVitalityImg,
    images: [hisVitalityImg],
    category: 'formulations',
    concept: 'mens-vitality',
    problemSupports: ['Endurance', 'Stamina', 'Male health'],
    bestTimeToUse: 'Morning with breakfast',
    howToUse: ['Take 2 tablets with breakfast', 'With milk', 'Daily use', 'Combine with exercise'],
    ingredients: [
      { name: 'Safed Musli', benefit: 'Stamina enhancement' },
      { name: 'Kaunch Beej', benefit: 'Endurance support' },
      { name: 'Ashwagandha', benefit: 'Vitality' },
      { name: 'Shilajit', benefit: 'Energy' }
    ],
    whatToExpect: ['Week 1-2: More energy', 'Week 3-4: Better endurance', 'Month 2+: Peak vitality'],
    rating: 4.9,
    reviewCount: 187,
    inStock: true,
    isBestseller: true
  },
  {
    id: 'vital-man',
    name: 'VitalMan',
    slug: 'vital-man',
    tagline: 'For male strength',
    description: 'A strength-building formula with gokshura and tribulus for male power and performance.',
    price: 189,
    subscriptionPrice: 161,
    currency: 'AED',
    image: vitalManImg,
    images: [vitalManImg],
    category: 'formulations',
    concept: 'mens-vitality',
    problemSupports: ['Male strength', 'Performance', 'Power'],
    bestTimeToUse: 'Morning and before exercise',
    howToUse: ['Take 1 tablet morning and pre-workout', 'With water', 'Consistent use', 'Active lifestyle'],
    ingredients: [
      { name: 'Gokshura', benefit: 'Strength building' },
      { name: 'Tribulus', benefit: 'Performance enhancement' },
      { name: 'Ashwagandha', benefit: 'Recovery' },
      { name: 'Shilajit', benefit: 'Stamina' }
    ],
    whatToExpect: ['Week 1-2: Increased power', 'Week 3-4: Better performance', 'Month 2+: Sustained strength'],
    rating: 4.7,
    reviewCount: 156,
    inStock: true
  },

  // ============= GENERAL HEALTH =============
  {
    id: 'shila-plex',
    name: 'ShilaPlex',
    slug: 'shila-plex',
    tagline: 'For energy & all-round vitality',
    description: 'Premium shilajit formula for comprehensive energy, vitality, and overall wellness.',
    price: 249,
    subscriptionPrice: 212,
    currency: 'AED',
    image: shilaPlexImg,
    images: [shilaPlexImg],
    category: 'formulations',
    concept: 'general-health',
    problemSupports: ['Energy', 'Vitality', 'Overall wellness'],
    bestTimeToUse: 'Morning with warm milk',
    howToUse: ['Take 1 capsule in morning', 'With warm milk or water', 'On empty stomach', 'Daily use'],
    ingredients: [
      { name: 'Purified Shilajit', benefit: 'Mineral-rich energy' },
      { name: 'Ashwagandha', benefit: 'Vitality support' },
      { name: 'Safed Musli', benefit: 'Strength' },
      { name: 'Gold Bhasma', benefit: 'Rejuvenation' }
    ],
    whatToExpect: ['Week 1: Increased energy', 'Week 2-3: Better stamina', 'Month 1+: All-round vitality'],
    rating: 4.9,
    reviewCount: 312,
    inStock: true,
    isBestseller: true
  },
  {
    id: 'reviva',
    name: 'Reviva',
    slug: 'reviva',
    tagline: 'For rejuvenation',
    description: 'A rejuvenating superfood powder with moringa and spirulina for daily nutrition and vitality.',
    price: 179,
    subscriptionPrice: 152,
    currency: 'AED',
    image: revivaImg,
    images: [revivaImg],
    category: 'powders',
    concept: 'general-health',
    problemSupports: ['Rejuvenation', 'Daily nutrition', 'Energy'],
    bestTimeToUse: 'Morning',
    howToUse: ['Mix 1 scoop with water or smoothie', 'Daily in morning', 'Can add to food', 'Stay consistent'],
    ingredients: [
      { name: 'Moringa', benefit: 'Complete nutrition' },
      { name: 'Spirulina', benefit: 'Protein and energy' },
      { name: 'Wheatgrass', benefit: 'Chlorophyll' },
      { name: 'Amla', benefit: 'Vitamin C' }
    ],
    whatToExpect: ['Day 1: Nutritional boost', 'Week 1-2: More energy', 'Month 1+: Rejuvenated wellness'],
    rating: 4.8,
    reviewCount: 234,
    inStock: true
  },
  {
    id: 'rejuve-daily',
    name: 'RejuveDaily',
    slug: 'rejuve-daily',
    tagline: 'For rejuvenation',
    description: 'A daily rejuvenation formula inspired by chyawanprash for sustained energy and immunity.',
    price: 169,
    subscriptionPrice: 144,
    currency: 'AED',
    image: rejuveDailyImg,
    images: [rejuveDailyImg],
    category: 'formulations',
    concept: 'general-health',
    problemSupports: ['Daily rejuvenation', 'Energy', 'Immunity'],
    bestTimeToUse: 'Morning with breakfast',
    howToUse: ['Take 2 tablets with breakfast', 'With warm milk', 'Daily use', 'All ages'],
    ingredients: [
      { name: 'Amla', benefit: 'Vitamin C' },
      { name: 'Ashwagandha', benefit: 'Energy' },
      { name: 'Giloy', benefit: 'Immunity' },
      { name: 'Pippali', benefit: 'Bioavailability' }
    ],
    whatToExpect: ['Week 1: Better energy', 'Week 2-3: Stronger immunity', 'Month 1+: Daily rejuvenation'],
    rating: 4.7,
    reviewCount: 178,
    inStock: true
  },
  {
    id: 'energy-boost',
    name: 'EnergyBoost',
    slug: 'energy-boost',
    tagline: 'For energy',
    description: 'A natural energy formula with maca and ginseng for sustained energy without jitters.',
    price: 159,
    subscriptionPrice: 135,
    currency: 'AED',
    image: energyBoostImg,
    images: [energyBoostImg],
    category: 'single-herbs',
    concept: 'general-health',
    problemSupports: ['Natural energy', 'Focus', 'No crash'],
    bestTimeToUse: 'Morning and early afternoon',
    howToUse: ['Take 1-2 capsules morning', 'Can take again early afternoon', 'Not after 3pm', 'With water'],
    ingredients: [
      { name: 'Maca Root', benefit: 'Sustained energy' },
      { name: 'Ginseng', benefit: 'Mental alertness' }
    ],
    whatToExpect: ['Day 1: Natural energy lift', 'Week 1: Sustained energy', 'Month 1+: Consistent vitality'],
    rating: 4.7,
    reviewCount: 198,
    inStock: true
  },
  {
    id: 'natural-stamina',
    name: 'NaturalStamina',
    slug: 'natural-stamina',
    tagline: 'For stamina',
    description: 'A stamina-building formula with safed musli and ashwagandha for enduring strength.',
    price: 179,
    subscriptionPrice: 152,
    currency: 'AED',
    image: naturalStaminaImg,
    images: [naturalStaminaImg],
    category: 'single-herbs',
    concept: 'general-health',
    problemSupports: ['Stamina', 'Endurance', 'Physical performance'],
    bestTimeToUse: 'Morning and pre-exercise',
    howToUse: ['Take 1 capsule morning', 'Take 1 before exercise', 'With water', 'Regular exercise'],
    ingredients: [
      { name: 'Safed Musli', benefit: 'Stamina building' },
      { name: 'Ashwagandha', benefit: 'Endurance' }
    ],
    whatToExpect: ['Week 1-2: Better endurance', 'Week 3-4: Increased stamina', 'Month 2+: Peak performance'],
    rating: 4.6,
    reviewCount: 145,
    inStock: true
  },
  {
    id: 'golden-curcumin',
    name: 'GoldenCurcumin',
    slug: 'golden-curcumin',
    tagline: 'For inflammation',
    description: 'High-potency curcumin with black pepper for enhanced absorption and anti-inflammatory benefits.',
    price: 189,
    subscriptionPrice: 161,
    currency: 'AED',
    image: goldenCurcuminImg,
    images: [goldenCurcuminImg],
    category: 'formulations',
    concept: 'general-health',
    problemSupports: ['Inflammation', 'Joint comfort', 'Antioxidant'],
    bestTimeToUse: 'With meals',
    howToUse: ['Take 1 capsule twice daily', 'With fatty meals for absorption', 'Consistent use', 'Stay hydrated'],
    ingredients: [
      { name: 'Curcumin 95%', benefit: 'Anti-inflammatory' },
      { name: 'Black Pepper Extract', benefit: '20x absorption' }
    ],
    whatToExpect: ['Week 1-2: Reduced inflammation', 'Week 3-4: Joint comfort', 'Month 2+: Overall wellness'],
    rating: 4.9,
    reviewCount: 289,
    inStock: true,
    isBestseller: true
  },
  {
    id: 'allergy-ease',
    name: 'AllergyEase',
    slug: 'allergy-ease',
    tagline: 'For allergy support',
    description: 'A natural allergy support formula with nettle and quercetin for seasonal comfort.',
    price: 159,
    subscriptionPrice: 135,
    currency: 'AED',
    image: allergyEaseImg,
    images: [allergyEaseImg],
    category: 'formulations',
    concept: 'immunity',
    problemSupports: ['Allergy support', 'Seasonal comfort', 'Histamine balance'],
    bestTimeToUse: 'Morning and as needed',
    howToUse: ['Take 1 tablet twice daily', 'Start before allergy season', 'Can increase during high pollen', 'With water'],
    ingredients: [
      { name: 'Nettle Leaf', benefit: 'Histamine support' },
      { name: 'Quercetin', benefit: 'Antioxidant' },
      { name: 'Vitamin C', benefit: 'Immune support' },
      { name: 'Bromelain', benefit: 'Inflammation' }
    ],
    whatToExpect: ['Week 1: Reduced symptoms', 'Week 2-3: Better comfort', 'Season: Manageable allergies'],
    rating: 4.6,
    reviewCount: 156,
    inStock: true
  },
  {
    id: 'moringa-vital',
    name: 'MoringaVital',
    slug: 'moringa-vital',
    tagline: 'For daily nutrition',
    description: 'Pure moringa tablets for complete daily nutrition with 90+ nutrients.',
    price: 129,
    subscriptionPrice: 110,
    currency: 'AED',
    image: moringaVitalImg,
    images: [moringaVitalImg],
    category: 'formulations',
    concept: 'general-health',
    problemSupports: ['Daily nutrition', 'Energy', 'Wellness'],
    bestTimeToUse: 'Morning with breakfast',
    howToUse: ['Take 2 tablets with breakfast', 'With water', 'Daily use', 'All ages'],
    ingredients: [
      { name: 'Moringa Leaf', benefit: 'Complete nutrition with 90+ nutrients' }
    ],
    whatToExpect: ['Day 1: Nutritional support', 'Week 1-2: More energy', 'Month 1+: Optimal nutrition'],
    rating: 4.8,
    reviewCount: 234,
    inStock: true
  },

  // ============= GHRITI (MEDICATED GHEE) =============
  {
    id: 'mind-calm-ghriti',
    name: 'MindCalmGhriti',
    slug: 'mind-calm-ghriti',
    tagline: 'For mental calm',
    description: 'Traditional brahmi-infused ghee for mental calm, clarity, and cognitive support.',
    price: 219,
    subscriptionPrice: 186,
    currency: 'AED',
    image: mindCalmGhritiImg,
    images: [mindCalmGhritiImg],
    category: 'ghriti',
    concept: 'brain-mind',
    problemSupports: ['Mental calm', 'Cognitive support', 'Memory'],
    bestTimeToUse: 'Morning on empty stomach',
    howToUse: ['Take 1 teaspoon morning', 'On empty stomach', 'With warm milk', 'Daily use'],
    ingredients: [
      { name: 'Pure A2 Ghee', benefit: 'Carrier and nourishment' },
      { name: 'Brahmi', benefit: 'Mental calm' },
      { name: 'Shankhpushpi', benefit: 'Memory support' },
      { name: 'Vacha', benefit: 'Clarity' }
    ],
    whatToExpect: ['Week 1: Calmer mind', 'Week 2-3: Better focus', 'Month 1+: Enhanced cognition'],
    rating: 4.9,
    reviewCount: 145,
    inStock: true
  },
  {
    id: 'mindful-ghriti',
    name: 'MindfulGhriti',
    slug: 'mindful-ghriti',
    tagline: 'For mindfulness',
    description: 'A meditative ghee blend with calming herbs to support mindfulness and inner peace.',
    price: 199,
    subscriptionPrice: 169,
    currency: 'AED',
    image: mindfulGhritiImg,
    images: [mindfulGhritiImg],
    category: 'ghriti',
    concept: 'calm',
    problemSupports: ['Mindfulness', 'Inner peace', 'Meditation support'],
    bestTimeToUse: 'Before meditation or evening',
    howToUse: ['Take 1 teaspoon before meditation', 'Or in evening', 'With warm water or milk', 'Quiet environment'],
    ingredients: [
      { name: 'Pure A2 Ghee', benefit: 'Grounding' },
      { name: 'Ashwagandha', benefit: 'Calm' },
      { name: 'Brahmi', benefit: 'Focus' },
      { name: 'Jatamansi', benefit: 'Peace' }
    ],
    whatToExpect: ['Immediate: Grounded feeling', 'Week 1-2: Deeper meditation', 'Month 1+: Sustained mindfulness'],
    rating: 4.8,
    reviewCount: 98,
    inStock: true
  },
  {
    id: 'her-ghriti',
    name: 'HerGhriti',
    slug: 'her-ghriti',
    tagline: 'For women\'s wellness',
    description: 'A shatavari-infused ghee specially formulated for women\'s hormonal and reproductive wellness.',
    price: 229,
    subscriptionPrice: 195,
    currency: 'AED',
    image: herGhritiImg,
    images: [herGhritiImg],
    category: 'ghriti',
    concept: 'womens-balance',
    problemSupports: ['Women\'s wellness', 'Hormonal support', 'Nourishment'],
    bestTimeToUse: 'Morning and evening',
    howToUse: ['Take 1 teaspoon twice daily', 'With warm milk', 'Track with cycle', 'Consistent use'],
    ingredients: [
      { name: 'Pure A2 Ghee', benefit: 'Deep nourishment' },
      { name: 'Shatavari', benefit: 'Female hormones' },
      { name: 'Ashoka', benefit: 'Cycle support' },
      { name: 'Rose', benefit: 'Heart and mood' }
    ],
    whatToExpect: ['Week 1-2: Nourished feeling', 'Month 1: Hormonal balance', 'Month 2+: Women\'s wellness'],
    rating: 4.9,
    reviewCount: 167,
    inStock: true,
    isBestseller: true
  }
];

export const concepts: Concept[] = [
  {
    id: 'calm',
    name: 'Calm Concept',
    tagline: 'Find your peace',
    description: 'Modern life is stressful. The Calm Concept combines ancient wisdom with daily rituals to help you manage stress and achieve restful sleep.',
    color: 'bg-blue-50',
    icon: '🌙',
    products: ['serene-tea', 'stress-balance', 'sleep-support', 'lavender-calm', 'morning-jasmine', 'mindful-ghriti']
  },
  {
    id: 'womens-balance',
    name: "Women's Balance Concept",
    tagline: 'Honor your cycle',
    description: "Support your body through every phase. Our Women's Balance Concept provides gentle, natural support for hormonal wellness.",
    color: 'bg-pink-50',
    icon: '🌸',
    products: ['her-tea', 'her-balance', 'fem-balance', 'her-ghriti']
  },
  {
    id: 'immunity',
    name: 'Immunity Concept',
    tagline: 'Shield naturally',
    description: "Build your body's natural defenses. The Immunity Concept strengthens your system with time-tested herbs used for generations.",
    color: 'bg-green-50',
    icon: '🛡️',
    products: ['immune-tea', 'pure-holy-basil', 'daily-immunity', 'immune-safe', 'amla-shield', 'immune-capsules', 'allergy-ease']
  },
  {
    id: 'metabolic-balance',
    name: 'Metabolic Balance Concept',
    tagline: 'Fuel your vitality',
    description: 'Support healthy metabolism and blood sugar balance. The Metabolic Balance Concept helps maintain steady energy throughout the day.',
    color: 'bg-amber-50',
    icon: '⚡',
    products: ['diabe-tea', 'glyco-balance', 'gluco-steady', 'diabease', 'meta-trim', 'lean-form', 'metabolic-booster', 'bitter-guard']
  },
  {
    id: 'skin-glow',
    name: 'Skin & Glow Concept',
    tagline: 'Radiate from within',
    description: 'True beauty starts inside. The Skin & Glow Concept nurtures your complexion with purifying and nourishing herbs.',
    color: 'bg-rose-50',
    icon: '✨',
    products: ['radiant-tea', 'illuma-mask', 'detox-mask', 'ubtanaa-mask', 'radiance-mask', 'body-cleanse', 'hydra-mist', 'rose-mist', 'rose-bliss', 'saffron-bloom', 'pure-glow', 'clear-derma']
  },
  {
    id: 'heart-wellness',
    name: 'Heart Wellness Concept',
    tagline: 'Love your heart',
    description: 'Invest in your long-term cardiovascular health. The Heart Wellness Concept supports your heart with powerful, gentle herbs.',
    color: 'bg-red-50',
    icon: '❤️',
    products: ['heart-tea', 'heart-defense', 'bp-care']
  },
  {
    id: 'brain-mind',
    name: 'Brain & Mind Concept',
    tagline: 'Sharpen your focus',
    description: 'Enhance mental clarity and cognitive function. The Brain & Mind Concept supports focus, memory, and mental wellness.',
    color: 'bg-indigo-50',
    icon: '🧠',
    products: ['zen-focus', 'mind-boost', 'mind-calm-ghriti']
  },
  {
    id: 'hair-scalp',
    name: 'Hair & Scalp Concept',
    tagline: 'Nourish your roots',
    description: 'Healthy hair starts at the root. The Hair & Scalp Concept provides deep nourishment for stronger, more beautiful hair.',
    color: 'bg-emerald-50',
    icon: '💇',
    products: ['root-luxe', 'root-strong', 'scalp-cleanse', 'hair-support']
  },
  {
    id: 'digestive',
    name: 'Digestive Wellness Concept',
    tagline: 'Trust your gut',
    description: 'Good health begins in the gut. The Digestive Wellness Concept supports healthy digestion and gut comfort.',
    color: 'bg-orange-50',
    icon: '🌿',
    products: ['gut-clear', 'gentle-gut-cleanse', 'aloe-vera-digest', 'daily-detox', 'refluxa']
  },
  {
    id: 'liver',
    name: 'Liver Health Concept',
    tagline: 'Cleanse and renew',
    description: 'Support your liver\'s vital detoxification work. The Liver Health Concept helps cleanse and protect this essential organ.',
    color: 'bg-teal-50',
    icon: '🫀',
    products: ['liv-cleanse-ritual', 'de-stone']
  },
  {
    id: 'joints-bones',
    name: 'Joints & Bones Concept',
    tagline: 'Move with ease',
    description: 'Support mobility and bone strength. The Joints & Bones Concept helps you maintain an active, comfortable life.',
    color: 'bg-stone-50',
    icon: '🦴',
    products: ['joint-flex-support', 'osteo-support']
  },
  {
    id: 'mens-vitality',
    name: "Men's Vitality Concept",
    tagline: 'Fuel your power',
    description: "Support male vitality, strength, and performance. The Men's Vitality Concept is designed for the modern man's wellness needs.",
    color: 'bg-slate-100',
    icon: '💪',
    products: ['man-boost', 'his-vitality', 'vital-man']
  },
  {
    id: 'general-health',
    name: 'General Health Concept',
    tagline: 'Everyday wellness',
    description: 'Support overall health and vitality. The General Health Concept provides foundational wellness for every day.',
    color: 'bg-yellow-50',
    icon: '🌟',
    products: ['shila-plex', 'reviva', 'rejuve-daily', 'energy-boost', 'natural-stamina', 'golden-curcumin', 'moringa-vital', 'shape-tone', 'firm-boost']
  }
];

export const bundles: Bundle[] = [
  {
    id: 'calm-bundle',
    name: 'Calm Concept Pack',
    slug: 'calm-concept-pack',
    concept: 'calm',
    description: 'Everything you need to establish a calming daily routine. Includes SereneTea and complementary wellness items.',
    products: ['serene-tea', 'stress-balance', 'lavender-calm'],
    originalPrice: 367,
    bundlePrice: 299,
    subscriptionPrice: 269,
    savings: 68,
    image: serenTeaImg
  },
  {
    id: 'womens-bundle',
    name: "Women's Balance Pack",
    slug: 'womens-balance-pack',
    concept: 'womens-balance',
    description: 'Complete hormonal support for every phase of your cycle. Includes HerTea and nurturing essentials.',
    products: ['her-tea', 'her-balance', 'her-ghriti'],
    originalPrice: 547,
    bundlePrice: 449,
    subscriptionPrice: 399,
    savings: 98,
    image: herTeaImg
  },
  {
    id: 'immunity-bundle',
    name: 'Immunity Concept Pack',
    slug: 'immunity-concept-pack',
    concept: 'immunity',
    description: 'Build your natural defenses with our complete immunity system.',
    products: ['immune-tea', 'pure-holy-basil', 'amla-shield'],
    originalPrice: 357,
    bundlePrice: 289,
    subscriptionPrice: 259,
    savings: 68,
    image: immuneTeaImg
  },
  {
    id: 'metabolic-bundle',
    name: 'Metabolic Balance Pack',
    slug: 'metabolic-balance-pack',
    concept: 'metabolic-balance',
    description: 'Support your metabolism with our comprehensive pack.',
    products: ['diabe-tea', 'diabease', 'glyco-balance'],
    originalPrice: 527,
    bundlePrice: 429,
    subscriptionPrice: 379,
    savings: 98,
    image: diabeTeaImg
  },
  {
    id: 'skin-bundle',
    name: 'Skin & Glow Pack',
    slug: 'skin-glow-pack',
    concept: 'skin-glow',
    description: 'Radiate from within with our complete skin wellness pack.',
    products: ['radiant-tea', 'pure-glow', 'saffron-bloom'],
    originalPrice: 527,
    bundlePrice: 429,
    subscriptionPrice: 379,
    savings: 98,
    image: radiantTeaImg
  },
  {
    id: 'heart-bundle',
    name: 'Heart Wellness Pack',
    slug: 'heart-wellness-pack',
    concept: 'heart-wellness',
    description: 'Love your heart with our complete cardiovascular support pack.',
    products: ['heart-tea', 'heart-defense', 'bp-care'],
    originalPrice: 517,
    bundlePrice: 419,
    subscriptionPrice: 369,
    savings: 98,
    image: heartTeaImg
  },
  {
    id: 'mens-vitality-bundle',
    name: "Men's Vitality Pack",
    slug: 'mens-vitality-pack',
    concept: 'mens-vitality',
    description: 'Complete male vitality support for strength and performance.',
    products: ['man-boost', 'his-vitality', 'shila-plex'],
    originalPrice: 667,
    bundlePrice: 549,
    subscriptionPrice: 489,
    savings: 118,
    image: manBoostImg
  }
];

export const getProductById = (id: string): Product | undefined => 
  products.find(p => p.id === id);

export const getProductBySlug = (slug: string): Product | undefined => 
  products.find(p => p.slug === slug);

export const getBundleById = (id: string): Bundle | undefined => 
  bundles.find(b => b.id === id);

export const getBundleBySlug = (slug: string): Bundle | undefined => 
  bundles.find(b => b.slug === slug);

export const getConceptById = (id: string): Concept | undefined => 
  concepts.find(c => c.id === id);

export const getProductsByCategory = (category: string): Product[] => 
  products.filter(p => p.category === category);

export const getProductsByConcept = (conceptId: string): Product[] => 
  products.filter(p => p.concept === conceptId);

export const getBundlesByConcept = (conceptId: string): Bundle[] => 
  bundles.filter(b => b.concept === conceptId);
