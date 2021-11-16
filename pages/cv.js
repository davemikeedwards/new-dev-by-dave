export default function Cv() {
  return (
    <div className="bg-gray-100 py-3 px-3 md:px-16 lg:px-28 text-gray-600 font-lato">
      <div>
        <div className="text-center md:text-left mb-3">
          <div className="font-extralight text-gray-600 mb-3 text-5xl">
            David Edwards
          </div>
          <div>FULL-STACK SOFTWARE DEVELOPER</div>
          <div className="flex gap-2 justify-center my-4 md:my-0 md:justify-start items-center">
            <a href="mailto:dave.mike.edwards@gmail.com">
              dave.mike.edwards@gmail.com
            </a>
            <img alt="email" className="h-4" src="/images/gmail.png" />
          </div>
          <div className="flex gap-2 justify-center md:justify-start items-center">
            <a href="tel:+447581711583">(+44) 07581711583</a>
            <img alt="email" className="h-4" src="/images/phone.png" />
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-3 md:gap-10">
          <div className="col-span-2 flex flex-col gap-3">
            <div className="text-purple-600">PROFILE</div>
            <div className="font-space text-sm text-justify">
              I am a highly organised individual who is an excellent
              communicator. I love working in fast-paced working environments
              with teams of creative individuals. I deliver projects on time,
              adapt quickly to modern technologies and think creatively as part
              of a team or on my own. I enjoy continuously learning in the field
              of software development and sharing my growing knowledge with
              others.
            </div>
            <div className="text-purple-600">EXPERIENCE</div>
            <div className="font-space text-sm text-justify mb-2">
              <div className="text-gray-900 text-base">
                Return on Investment (CODIFI), Remote — Software Developer
              </div>
              <div className="text-xs text-gray-700 italic mb-2">
                September 2020 - PRESENT
              </div>
              Currently working with React / NextJS and .Net core with
              PostgreSQL and MSSQL Server to develop state of the art fleet
              management software and customer portals. I have grown my backend
              skills in this role as well as getting exposure to Octopus for
              deployments and AWS - using S3 buckets and EC2 servers.
            </div>
            <div className="font-space text-sm text-justify mb-2">
              <div className="text-gray-900 text-base">
                Stopford, Chester — Software Developer
              </div>
              <div className="text-xs text-gray-700 italic mb-2">
                March 2019 - September 2020
              </div>
              I worked with a small team to implement the newest version of
              Stopford’s online booking software using Vue.js on the front end
              and VB.Net on the back end with Microsoft SQL Server.
            </div>
            <div className="font-space text-sm text-justify mb-2">
              <div className="text-gray-900 text-base">
                Hashtag Marketing, Wrexham — Software Developer
              </div>
              <div className="text-xs text-gray-700 italic mb-2">
                October 2018 - March 2019
              </div>
              I worked in a full stack software developer role, working heavily
              with React.js, Node.js and MongoDB. Our team developed a Security
              / Risk Management platform for one of the largest companies in the
              UK in its market.
            </div>
            <div className="text-purple-600">EDUCATION</div>
            <div className="font-space text-sm text-justify mb-2">
              <div className="text-gray-900 text-base">
                Wrexham Glyndwr University, Wrexham — BSc Hons Computer Science
              </div>
              <div className="text-xs text-gray-700 italic mb-2">
                September 2015 - May 2019
              </div>
              Passed with 2:1 degree
            </div>
          </div>
          <div className="flex flex-col w-full items-start md:items-end md:text-right gap-1">
            <div className="text-purple-600 mb-2">SKILLS</div>
            <div className="font-space text-sm">Version Control (Git)</div>
            <div className="font-space text-sm">
              Kanban Board Project Management
            </div>
            <div className="font-space text-sm">Agile Software Development</div>
            <div className="font-space text-sm">Design Driven Development</div>
            <div className="text-purple-600 mb-2 mt-3">TECHNOLOGIES</div>
            <div className="font-space text-sm">
              React, Node, Javascript, ES6, ES2020, NextJS
            </div>
            <div className="font-space text-sm">
              MongoDB, T-SQL, MSSQL Server
            </div>
            <div className="font-space text-sm">HTML, CSS, TailwindCSS</div>
            <div className="font-space text-sm">
              AWS - S3 / EC2, Octopus, Netlify
            </div>
            <div className="text-purple-600 mb-2 mt-3">HOBBIES</div>
            <div className="font-space text-sm">Walking</div>
            <div className="font-space text-sm">Personal Projects</div>
            <div className="font-space text-sm">Family Board Games</div>
            <div className="font-space text-sm">Improving Skillset </div>
            <div className="text-purple-600 mb-2 mt-3">PROJECTS OWNED</div>
            <div className="font-space text-sm">
              Pokémon Top Trumps Game (Personal)
            </div>
            <div className="font-space text-sm">What The Photo (Personal)</div>
            <div className="font-space text-sm">My Website (Personal)</div>
            <div className="font-space text-sm">
              Hotel Management Platform (Academic)
            </div>
            <div className="font-space text-sm">
              Complex PDF Generator (Commercial)
            </div>
            <div className="font-space text-sm mb-8">
              Stock Management Tool (Commercial)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
