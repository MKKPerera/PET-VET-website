export interface Product {
  id: number
  name: string
  category: 'Food' | 'Toys' | 'Clothing' | 'Health'
  pet: string
  price: number
  image: string
  rating: number
}

export const products: Product[] = [
  { id: 1, name: 'Premium Dry Dog Food 5kg', category: 'Food', pet: 'Dog', price: 6500, image: '/images/dog-food.jpg', rating: 5 },
  { id: 2, name: 'Plush Squeaky Elephant Toy', category: 'Toys', pet: 'Dog', price: 1850, image: '/images/plush-toy.jpg', rating: 4 },
  { id: 3, name: 'Cozy Knit Pet Sweater', category: 'Clothing', pet: 'Dog', price: 2900, image: '/images/pet-sweater.jpg', rating: 5 },
  { id: 4, name: 'Sunny Yellow Dog Hoodie', category: 'Clothing', pet: 'Dog', price: 3400, image: '/images/dog-hoodie.jpg', rating: 4 },
  { id: 5, name: 'Grain-Free Kitten Formula 2kg', category: 'Food', pet: 'Cat', price: 4200, image: '/images/kitten.jpg', rating: 5 },
  { id: 6, name: 'Hamster Seed & Treat Mix', category: 'Food', pet: 'Small Pet', price: 950, image: '/images/hamster.jpg', rating: 4 },
  { id: 7, name: 'Tropical Bird Seed Blend', category: 'Food', pet: 'Bird', price: 1350, image: '/images/bird.jpg', rating: 5 },
  { id: 8, name: 'Flea & Tick Care Kit', category: 'Health', pet: 'Dog', price: 3800, image: '/images/retriever.jpg', rating: 4 },
  { id: 9, name: 'Rabbit Timothy Hay 1kg', category: 'Food', pet: 'Small Pet', price: 1200, image: '/images/rabbit.jpg', rating: 5 },
  { id: 10, name: 'Paw Balm Moisturiser', category: 'Health', pet: 'Cat', price: 1600, image: '/images/paw.jpg', rating: 4 },
  { id: 11, name: 'Feather Wand Cat Teaser', category: 'Toys', pet: 'Cat', price: 1100, image: '/images/cat-green.jpg', rating: 5 },
  { id: 12, name: 'Dental Chew Sticks (30 pack)', category: 'Health', pet: 'Dog', price: 2250, image: '/images/schnauzer.jpg', rating: 4 }
]

export const services = [
  {
    title: 'Veterinary Checkups',
    image: '/images/vet-checkup.jpg',
    price: 'From Rs. 2,500',
    text: 'Full wellness exams, diagnostics and treatment by our licensed veterinarians.',
    points: ['Physical examination', 'Blood & lab tests', 'Dental assessment']
  },
  {
    title: 'Vaccinations',
    image: '/images/vaccination.jpg',
    price: 'From Rs. 1,800',
    text: 'Core and lifestyle vaccines to keep puppies, kittens and adults protected.',
    points: ['Puppy & kitten schedules', 'Rabies & DHPP', 'Vaccination records']
  },
  {
    title: 'Grooming & Spa',
    image: '/images/grooming.jpg',
    price: 'From Rs. 3,000',
    text: 'Bath, brush, haircut and nail trims in a calm, stress-free environment.',
    points: ['Breed-specific cuts', 'Nail & ear care', 'Flea treatment bath']
  },
  {
    title: 'Pet Boarding',
    image: '/images/boarding.jpg',
    price: 'Rs. 3,500 / night',
    text: 'Safe, supervised stays with daily play time while you are away.',
    points: ['Air-conditioned rooms', 'Daily walks & play', 'Photo updates']
  }
]

export const categories = [
  { name: 'Dogs', image: '/images/dog.jpg' },
  { name: 'Cats', image: '/images/cat.jpg' },
  { name: 'Birds', image: '/images/bird.jpg' },
  { name: 'Small Pets', image: '/images/hamster.jpg' },
  { name: 'Rabbits', image: '/images/rabbit.jpg' }
]

export const gallery = [
  '/images/puppy.jpg',
  '/images/pug.jpg',
  '/images/kitten.jpg',
  '/images/schnauzer.jpg',
  '/images/retriever.jpg',
  '/images/cat-green.jpg',
  '/images/cavalier.jpg',
  '/images/paw.jpg'
]

export const testimonials = [
  { name: 'Nadeesha R.', pet: 'Owner of Bruno (Beagle)', text: 'The vets are so gentle and patient. Bruno actually enjoys his checkups now!' },
  { name: 'Ashan P.', pet: 'Owner of Luna (Persian cat)', text: 'Great selection of food and toys, and the grooming service is excellent.' },
  { name: 'Dilini S.', pet: 'Owner of Max (Golden Retriever)', text: 'Boarded Max for a week – got daily photos and he came home happy.' }
]

export const vets = ['Dr. Kasun Fernando – General Practice', 'Dr. Ishara Perera – Surgery', 'Dr. Malith Silva – Exotic Pets']

export const formatPrice = (n: number) => `Rs. ${n.toLocaleString('en-LK')}`
