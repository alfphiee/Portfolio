import { useState } from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaVuejs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { SiDjango } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGit } from "react-icons/fa";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-gradient-to-r from-violet-600 to-slate-900 overscroll-none leading-relaxed text-slate-400 antialiased selection:bg-yellow-300 selection:text-teal-900'>
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
        <div className='lg:flex lg:justify-between lg:gap-4'>
          <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
            <div>
              <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl font-serif'>Alfie Binnie</h1>
              <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>Junior Software Developer</h2>
              <nav className='nav hidden lg:block'>

              </nav>
              <ul className='ml-1 mt-8 flex items-center'>
              <li className="mr-5 text-xs shrink-0"><a className="block hover:text-slate-200" href="https://github.com/alfphiee" target="_blank" rel="noreferrer noopener" title="GitHub"><span className="sr-only">GitHub</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></a></li>
              <li className="mr-5 text-xs shrink-0"><a className="block hover:text-slate-200" href="https://www.linkedin.com/in/alfie-binnie/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn"><span class="sr-only">LinkedIn</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg></a></li>
              </ul>
            </div>
          </header>
          <main className='pt-24 lg:w-1/2 lg:py-24'>
            <section id="about" className='mb-16 scroll-mt-16 md:mb-24 lg:mb-24 lg:scroll-mt-24'>
            <h2 className="text-xl font-bold tracking-widest text-slate-200 mb-4 font-serif text-center">- About -</h2>
            <div>
              <p className='mb-3'>Beginning my career as a Technology Apprentice, I discovered my interest in coding within the world of investment management - where I was exposed to various roles from Development to Cyber Security. The decision to transition more deeply into development was driven by my fascination with the endless possibilities for growth and improvement. This led me to a dedicated bootcamp, with the goal of becoming a Full Stack Developer.</p>
              <p className='mb-3'>I thrive in team environments, where my natural curiosity, eagerness to learn, and joy in teaching & learning from others comes to the forefront. My strength lies in being a supportive team player, adaptable and enthusiastic in tackling challenges.</p>
            </div>
            </section>
            <section id="skills" className='mb-16 scroll-mt-16 md:mb-24 lg:mb-24 lg:scroll-mt-24'>
              <h2 className="text-xl font-bold tracking-widest text-slate-200 mb-8 font-serif text-center">- Skills -</h2>
              <div className='grid gap-6 grid-cols-6'>
                <FaHtml5 size={42} />
                <FaCss3Alt size={42} />
                <IoLogoJavascript size={42}/>
                <FaVuejs size={42}/>
                <FaReact size={42}/>
                <SiTailwindcss size={42}/>
                <FaBootstrap size={42}/>
                <FaNodeJs size={42}/>
                <SiExpress size={42}/>
                <FaPython size={42}/>
                <SiDjango size={42}/>
                <SiMongodb size={42}/>
                <div className='col-start-3'><BiLogoPostgresql size={42}/></div>
                <FaGit size={42}/>
              </div>
            </section>
            <section id="experience" className='mb-16 scroll-mt-16 md:mb-24 lg:mb-24 lg:scroll-mt-24'>
              <h2 className="text-xl font-bold tracking-widest text-slate-200 mb-6 font-serif text-center">- Experience -</h2>
              <div>
                <ol>
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-300 sm:col-span-2'>
                      Nov 2023 - Mar 2024
                      </header>
                      <div className='z-10 sm:col-span-6'>
                        <h3 className='font-medium leading-snug text-slate-200'>
                        Software Engineering Immersive Bootcamp
                        </h3>
                        <p className="mt-2 text-sm leading-normal"> Completed projects in each Unit: Frontend Fundamentals, Full Stack Development, React Fundamentals, and Python & Django. Engaged in both solo and team projects, focusing on developing full-stack applications with modern technologies.</p>
                      </div>
                    </div>
                  </li>
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-300 sm:col-span-2'>
                      2021 - 2023
                      </header>
                      <div className='z-10 sm:col-span-6'>
                        <h3 className='font-medium leading-snug text-slate-200'>
                        Hutch Games - Games Analyst
                        </h3>
                        <p className="mt-2 text-sm leading-normal">Leveraged Python and SQL for data analysis, influencing product development with actionable insights.</p>
                        <p className="mt-2 text-sm leading-normal">Presented key analytical findings to the entire company - focus on explaining technical concepts to a non-technical audience</p>
                      </div>
                    </div>
                  </li>
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-300 sm:col-span-2'>
                      2017 - 2020
                      </header>
                      <div className='z-10 sm:col-span-6'>
                        <h3 className='font-medium leading-snug text-slate-200'>
                        Ruffer - Business Analyst
                        </h3>
                        <p className="mt-2 text-sm leading-normal">Built SQL queries to highlight problematic Client data that needed amending to Client Servicing team, this increased their response time by a business week, decreasing Ruffer’s exposure to issues with regulators. </p>
                        <p className="mt-2 text-sm leading-normal">Designed a live dashboard to allow the input and displaying of Client ‘mood’ data to Front Office teams - allowed data to be seen live and replaced a quarterly produced Excel sheet. Built a report builder in Python to allow for reports to be pulled into a PDF from the Dashboard. </p>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </section>
            <section id="experience" className='mb-16 scroll-mt-16 md:mb-24 lg:mb-24 lg:scroll-mt-24'>
            <h2 className="text-xl font-bold tracking-widest text-slate-200 mb-6 font-serif text-center">- Projects -</h2>
            <div>
              <ul>
                <li className='mb-12'>
                  <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                    <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-violet-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                    <div className='z-10 sm:order-2 sm:col-span-6'>
                      <h3>
                        <a 
                        className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-blue-300 focus-visible:text-teal-300  group/link text-base'
                        href='https://breakdown-alfie.netlify.app/'
                        target="_blank"
                        rel='noreferrer noopener'
                        >
                          <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                          <span>
                            breakDOWN - Project Management
                            <span class="inline-block">
                            </span>

                          </span>

                        </a>
                      </h3>
                      <p className='mt-2 text-sm leading-normal'>
                      Created a Django Backend to pull requested data from a PostgreSQL DB - making use of a React Frontend to display and interact with data - made use of DaisyUI and Tailwind to improve look and feel. Implemented Users, Projects & Tasks models to allow for task management within the project. Made use of Atlassian’s react-beautiful-dnd library to allow for dragging and dropping of Task Cards between Swimlanes to update status of tasks.
                      </p>
                    </div>
                    <img alt="breakDOWN project management card" width="200" height="48" className='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1' src='https://imgur.com/VI3mQLS.png'/>
                  </div>
                </li>
                <li className='mb-12'>
                  <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                    <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-violet-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                    <div className='z-10 sm:order-2 sm:col-span-6'>
                      <h3>
                        <a 
                        className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-blue-300 focus-visible:text-teal-300  group/link text-base'
                        href='https://cicefe.netlify.app/'
                        target="_blank"
                        rel='noreferrer noopener'
                        >
                          <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                          <span>
                            CICE - Messaging Application
                            <span class="inline-block">
                            </span>

                          </span>

                        </a>
                      </h3>
                      <p className='mt-2 text-sm leading-normal'>
                      Created a Messaging Application in a two-person group. Using a React Frontend with shadCN UI library in combination with an Express backend querying a MongoDB. Allowed for User authentication & integrated websockets to allow for ‘real-time’ conversation and updates between multiple users. 
                      </p>
                    </div>
                    <img alt="CICE Chat Application card" width="200" height="48" className='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1' src='https://imgur.com/p2P7Fmn.png'/>
                  </div>
                </li>
                <li className='mb-12'>
                  <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                    <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-violet-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                    <div className='z-10 sm:order-2 sm:col-span-6'>
                      <h3>
                        <a 
                        className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-blue-300 focus-visible:text-teal-300  group/link text-base'
                        href='https://warm-trifle-440ea1.netlify.app/'
                        target="_blank"
                        rel='noreferrer noopener'
                        >
                          <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                          <span>
                            Coach Tracker - Coach Management Tool
                            <span class="inline-block">
                            </span>

                          </span>

                        </a>
                      </h3>
                      <p className='mt-2 text-sm leading-normal'>
                      Created a Platform for Coaches to keep track of training sessions - able to add Sessions, Athletes and notes for each session. Made using MEVN stack project. Made use of Vue.js Frontend with an Express Backend.
                      </p>
                    </div>
                    <img alt="Coach Tracker Application card" width="200" height="48" className='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1' src='https://i.imgur.com/zMA7EkP.png'/>
                  </div>
                </li>
                <li className='mb-12'>
                  <div className='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                    <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-violet-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
                    <div className='z-10 sm:order-2 sm:col-span-6'>
                      <h3>
                        <a 
                        className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-blue-300 focus-visible:text-teal-300  group/link text-base'
                        href='https://alfphiee.github.io/Unit_1_Project_Tetris/'
                        target="_blank"
                        rel='noreferrer noopener'
                        >
                          <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                          <span>
                            Tetris
                            <span class="inline-block">
                            </span>

                          </span>

                        </a>
                      </h3>
                      <p className='mt-2 text-sm leading-normal'>
                      Creating Tetris using HTML & CSS to display the game and JavaScript to drive the game mechanics. Managed to create a fully functional Tetris Game. Was able to include logic for Wall kicks (awkward rotation interactions near walls) and a ghost to show where the current tetromino would land.
                      </p>
                    </div>
                    <img alt="Coach Tracker Application card" width="200" height="48" className='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1' src='https://i.imgur.com/aZjz845.png'/>
                  </div>
                </li>
              </ul>
            </div>
            </section>
          </main>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
