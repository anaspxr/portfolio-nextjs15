export default function Skills() {
  return (
    <div className="mx-4 sm:mx-12 mb-8 md:mx-20 lg:mx-32 p-4 bg-black ">
      <h2 className="text-3xl text-center">My skills</h2>
      <div
        className={`my-2 h-1 w-32 m-auto bg-violet-800 transition-[width] duration-700 ease-in-out`}></div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        <div>
          <p className="text-2xl text-violet-200 my-2">Frontend</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
          </ul>
        </div>
        <div>
          <p className="text-2xl text-violet-200 my-2">Backend</p>
          <ul>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div>
          <p className="text-2xl text-violet-200 my-2">Tools</p>
          <ul>
            <li>Git</li>
            <li>VS Code</li>
            <li>Postman</li>
            <li>Netlify</li>
            <li>Heroku</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
