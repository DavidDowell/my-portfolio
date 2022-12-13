import { AiFillApple } from 'react-icons/ai';

function App() {
  return (
    <main className='bg-white px-10'>
      <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-2xl'>David Dowell</h1>
          <ul className='flex items-center'>
            <li>
              <AiFillApple/>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}

export default App;
