export const moreProjects: { name: string; description: string; npoUrl?: string }[] = [
  { name: 'Inner City Visions', description: 'A client management system for Inner City Visions to support youth services and human trafficking intervention programs.', npoUrl: 'https://innercityvisions.org/' },
  { name: 'L.A. Waterkeeper', description: 'An interactive web app that educates the public about the LA River’s impact.', npoUrl: 'https://www.lawaterkeeper.org/' },
  { name: 'Alzheimer’s San Diego', description: 'A client management system that consolidates client onboarding, check-ins, and tracking all in one platform.', npoUrl: 'https://www.alzsd.org/' },
  { name: 'SaveCanto', description: 'A web app to act as a volunteer management system and a refined map and table system for verifying/displaying Cantonese language learning programs.' },
  { name: 'Project Ropa Offline Forms App', description: 'A check-ins app for volunteers to track deliveries of clean clothing to the homeless in LA.', npoUrl: 'https://www.projectropa.org/' },
  { name: 'Coordinating Survival Kit Distribution', description: 'A system streamlining on-the-ground distribution of homeless aid packages by thousands of volunteers.', npoUrl: 'https://www.thegivingspirit.org/' },
  { name: 'iiDecide', description: 'A platform for anonymously connecting victims and survivors of sexual assault who have the same perpetrator.' },
  { name: 'Oppia', description: 'Supporting free, interactive online learning opportunities for students with limited access to formal education.', npoUrl: 'https://www.oppia.org/' },
  { name: 'Gladeo', description: 'A pathway mapper web application to assist community college students in planning their coursework.', npoUrl: 'https://www.gladeo.org/' },
  { name: 'Swipe Out Hunger', description: 'A donor-donee matching app allowing students to share swipes with those struggling from food insecurity.', npoUrl: 'https://www.swipehunger.org/' },
  { name: 'Westside Food Bank', description: 'A food pantry locator with information on the nearest available pantries.', npoUrl: 'http://www.westsidefoodbankca.org/' },
  { name: 'Friends of the Semel Institute', description: 'Data analysis of a UCLA nonprofit’s donor base to maximize donations toward mental health awareness and research.', npoUrl: 'https://www.friendsofsemelinstitute.org/' },
  { name: 'Beloved Beauty', description: 'A donor deck and user survey to support funding for victims of sex trafficking.', npoUrl: 'https://www.belovedbeauty.org/' },
]

export const teamPhotos = ['/assets/team-1.png', '/assets/team-2.png', '/assets/team-3.png', '/assets/team-4.png']

export const teamPortraits = Array.from(
  { length: 34 },
  (_, index) => `/assets/figma/team/portraits/member-${String(index + 1).padStart(2, '0')}.png`,
)

export type LandingPhoto = {
  id: string
  avifSrcSet: string
  jpegSrc: string
  jpegSrcSet: string
}

export const landingPhotos: LandingPhoto[] = Array.from({ length: 15 }, (_, index) => {
  const id = `photo-${index + 1}`
  const base = `/assets/figma/landing/${id}`
  return {
    id,
    avifSrcSet: `${base}-640.avif 640w, ${base}-1280.avif 1280w`,
    jpegSrc: `${base}-1280.jpg`,
    jpegSrcSet: `${base}-640.jpg 640w, ${base}-1280.jpg 1280w`,
  }
})

export const landingPartners = [
  { name: 'Center for Restorative Justice Works', url: 'https://www.crjw.org/' },
  { name: 'Wags & Walks', url: 'https://www.wagsandwalks.org/' },
  { name: 'Mending Kids', url: 'https://www.mendingkids.org/' },
  { name: 'Save Cantonese', url: 'https://www.savecantonese.org/' },
  { name: "Alzheimer's San Diego", url: 'https://www.alzsd.org/' },
  { name: 'Inner City Visions', url: 'https://innercityvisions.org/' },
  { name: 'L.A. Waterkeeper', url: 'https://www.lawaterkeeper.org/' },
  { name: 'Los Angeles Food Policy Council', url: 'https://www.goodfoodla.org/' },
  { name: 'CoachArt', url: 'https://www.coachart.org/' },
  { name: 'oneAll', url: null },
  { name: 'HURIDOCS', url: 'https://huridocs.org/' },
  { name: 'Gravyty', url: 'https://gravyty.com/' },
  { name: 'Friends of the Semel Institute', url: 'https://www.friendsofsemelinstitute.org/' },
  { name: 'Handle with Care', url: 'https://handlewithcareus.org/' },
  { name: 'Beloved Beauty', url: 'https://www.belovedbeauty.org/' },
  { name: 'Swipe Out Hunger', url: 'https://www.swipehunger.org/' },
].map((partner, index) => ({ ...partner, src: `/assets/figma/landing/partner-${index + 1}.png` }))

export const boardMembers = [
  ['Himani Jha', 'President'], ['Ashley Varghese', 'President'], ['Jay Thapar', 'External Vice-President'],
  ['Gokul Nambiar', 'Internal Vice-President'], ['Akhilesh Basetty', 'Developer'], ['Linda Wang', 'Designer'],
  ['Tawny Huang', 'Developer'], ['Anusha Ladha', 'Developer'],
]

export const generalMembers = [
  ['Aditi Karthik', 'Developer'], ['Clare Jin', 'Developer'], ['Christine Han', 'Developer'],
  ['Cao Ninh Nguyen', 'Developer'], ['Sophie Kim', 'Designer'], ['Edin Le', 'Designer'],
  ['Katelyn Doanla', 'Designer'], ['Olivia Qi', 'Designer'], ['Jimin Kim', 'Developer'],
  ['Travis Ha', 'Developer'], ['Kasie Yang', 'Designer'], ['Lian Elsa Linton', 'Developer'],
  ['Shane Kuk', 'Developer'], ['Kian Shandi', 'Developer'], ['Haydn Man', 'Developer'],
  ['Katie Azuma', 'Designer'], ['Tiffany Pham', 'Designer'], ['Viyan Dabke', 'Developer'],
  ['Edi Zhang', 'Developer'], ['Kai Davey', 'Designer'], ['Nancy Tran', 'Designer'],
  ['Sunny Gandhari', 'Developer'], ['Maya Yoder', 'Designer'], ['Alyssa Leung', 'Developer'],
  ['Janani Acharya', 'Developer'], ['Clemente Irarrazaval', 'Developer'],
]

export const alumniMembers = [
  'Sonav Agarwal', 'Kylie Bach', 'Richelle Shim', 'Jason Chan', 'Tam Vo', 'Priyanshu Sharma',
  'Michael Wu', 'Kevin Li', 'Ingrid Chang', 'Pravir Chugh', 'Sahithi Lingampalli',
  'Natalia Luzuriaga', 'Nikhil Suresh', 'Arya Bhalla', 'Bryan Chiang', 'Joshua Zhang',
  'Chinmaya Vempati', 'Yili Liu', 'Janie Wang', 'Sean Choi', 'Valentin Nguyen',
  'Isabel Parmenter', 'Max Wu', 'Aneri Patel', 'Yuhan Liu', 'Willie Jeng',
  'Victor Lin', 'Tanaya Nawathe', 'Jeffrey Zhou', 'Anivrit Subramaniam', 'Charlie Kuoch',
  'Kati Rady-Pentek', 'Jeff Yue', 'Adithya Nair', 'Janys Li', 'Maizah Ali',
  'Ishan Garg', 'Jessica Wong', 'Steve Jiang', 'Dean Jones', 'Wolfe Pickett',
  'Bryan Song', 'Ashley Zhu', 'Jenny Wang', 'Alyssa Wang', 'Katie Li',
  'Iris Chang', 'Catherine Hu', 'Sriram Balachandran', 'Isabella Qian', 'Stephanie Doan',
  'Serene Supakkul', 'Jessica Lam', 'Sam Chai', 'Vivek Menon', 'Janice Tsai',
  'Joanna Chen', 'Kristopher Bakhtiar', 'Coleman Leung', 'Hannah Chu', 'Anagha Srivatsav',
  'Carter Bian', 'Kevin Zhang', 'Edward Zhang', 'Whitney Chan', 'Caitlyn Chen', 'Daniel Fang',
]
