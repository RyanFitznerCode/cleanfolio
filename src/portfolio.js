const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/RyanFitznerCode',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ryan Fitzner',
  role: 'Front End Engineer/Data & Financial Analyst',
  description:
    'Experienced Data/Financial Analyst with a demonstrated work history in the Metals/Manufacturing and Healthcare industries currently looking for new opportunities that allows Remote Work or in-office work within 40 miles of Livingston, TN. Possessing strong problem solving and analytical skills coupled with an education in business administration and accounting, I bring a unique perspective that helps close the gap between Financial Reporting/Accounting and Corporate IT.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://github.com/RyanFitznerCode',
    github: 'https://www.linkedin.com/in/ryanfitzner/',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Pending',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Pending',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Pending',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'T-SQL',
  'Extensive Excel/Word/VBA',
  'IBM AS400',
  'Git',
  'Business Objects',
  'Essbase(Oracle)',
  'Cognos',
  'Power BI',
  'Accounting',
  'Financial Reporting',
  'Data Analysis',
  'Problem Solving',
  'Analytical Thinking',
  'Attention to Detail'
  ,
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'azenor200@mail.com',
}

export { header, about, projects, skills, contact }
