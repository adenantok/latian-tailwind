import Link from 'next/link'

const Navbar = ({ onAddProduct }: { onAddProduct: () => void }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md p-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex mr-4">
            <h1 className="text-3xl font-bold">Web Latihan</h1>
          </div>
          <div className="flex">
            <ul className="flex justify-center font-bold">
              <li className="mr-4">
                <Link href="/">Home</Link>
              </li>
              <li className="mr-4">
                <button onClick={onAddProduct}>
                  Add Product
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
