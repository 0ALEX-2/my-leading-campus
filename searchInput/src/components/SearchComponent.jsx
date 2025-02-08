import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";

const dummyData = [
  {
    id: 1,
    name: "React Query",
  },
  {
    id: 2,
    name: "React Hooks",
  },
  {
    id: 3,
    name: "React Router",
  },
  {
    id: 4,
    name: "React State Management",
  },
  {
    id: 5,
    name: "React Performance Optimization",
  },
  {
    id: 6,
    name: "React Tutorial",
  },
  {
    id: 7,
    name: "React Best Practices",
  },
  {
    id: 8,
    name: "React vs Vue",
  },
  {
    id: 9,
    name: "React Interview Questions",
  },
  {
    id: 10,
    name: "React Roadmap",
  },
  {
    id: 11,
    name: "Next.js Server Components",
  },
  {
    id: 12,
    name: "Next.js API Routes",
  },
  {
    id: 13,
    name: "Next.js Middleware",
  },
  {
    id: 14,
    name: "Next.js Authentication",
  },
  {
    id: 15,
    name: "Next.js Performance Optimization",
  },
  {
    id: 16,
    name: "Next.js Tutorial",
  },
  {
    id: 17,
    name: "Next.js vs React",
  },
  {
    id: 18,
    name: "Next.js SEO Best Practices",
  },
  {
    id: 19,
    name: "Next.js Roadmap",
  },
  {
    id: 20,
    name: "Next.js Interview Questions",
  },
  {
    id: 21,
    name: "TypeScript Basics",
  },
  {
    id: 22,
    name: "TypeScript Interfaces",
  },
  {
    id: 23,
    name: "TypeScript Generics",
  },
  {
    id: 24,
    name: "TypeScript Utility Types",
  },
  {
    id: 25,
    name: "TypeScript vs JavaScript",
  },
  {
    id: 26,
    name: "TypeScript Tutorial",
  },
  {
    id: 27,
    name: "TypeScript Best Practices",
  },
  {
    id: 28,
    name: "TypeScript Roadmap",
  },
  {
    id: 29,
    name: "TypeScript Interview Questions",
  },
  {
    id: 30,
    name: "TypeScript Performance Optimization",
  },
  {
    id: 31,
    name: "Node.js Streams",
  },
  {
    id: 32,
    name: "Node.js Event Loop",
  },
  {
    id: 33,
    name: "Node.js File System",
  },
  {
    id: 34,
    name: "Node.js Authentication",
  },
  {
    id: 35,
    name: "Node.js WebSockets",
  },
  {
    id: 36,
    name: "Node.js Tutorial",
  },
  {
    id: 37,
    name: "Node.js Best Practices",
  },
  {
    id: 38,
    name: "Node.js vs Deno",
  },
  {
    id: 39,
    name: "Node.js Performance Optimization",
  },
  {
    id: 40,
    name: "Node.js Interview Questions",
  },
  {
    id: 41,
    name: "Redux Toolkit",
  },
  {
    id: 42,
    name: "Redux Middleware",
  },
  {
    id: 43,
    name: "Redux Thunk",
  },
  {
    id: 44,
    name: "Redux Saga",
  },
  {
    id: 45,
    name: "Redux vs Context API",
  },
  {
    id: 46,
    name: "Redux Tutorial",
  },
  {
    id: 47,
    name: "Redux Best Practices",
  },
  {
    id: 48,
    name: "Redux Performance Optimization",
  },
  {
    id: 49,
    name: "Redux Interview Questions",
  },
  {
    id: 50,
    name: "Redux Roadmap",
  },
  {
    id: 51,
    name: "Tailwind CSS Grid",
  },
  {
    id: 52,
    name: "Tailwind CSS Flexbox",
  },
  {
    id: 53,
    name: "Tailwind CSS Animations",
  },
  {
    id: 54,
    name: "Tailwind CSS Responsive Design",
  },
  {
    id: 55,
    name: "Tailwind CSS Dark Mode",
  },
  {
    id: 56,
    name: "Tailwind CSS Tutorial",
  },
  {
    id: 57,
    name: "Tailwind CSS Best Practices",
  },
  {
    id: 58,
    name: "Tailwind CSS vs Bootstrap",
  },
  {
    id: 59,
    name: "Tailwind CSS Performance Optimization",
  },
  {
    id: 60,
    name: "Tailwind CSS Interview Questions",
  },
];

class LRUCache {
  constructor(limit = 10) {
    this.limit = limit;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return null;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  set(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    else if (this.cache.size >= this.limit)
      this.cache.delete(this.cache.keys().next().value);
    this.cache.set(key, value);
  }
}

const cache = new LRUCache(10);

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  console.log(cache, "cache");
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 300);
    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const highlightMatch = (text, term) => {
    if (!term) return text;
    const regex = new RegExp(`(${term})`, "gi");
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === term.toLowerCase() ? (
        <strong key={index} className="text-blue-500">
          {part}
        </strong>
      ) : (
        part
      )
    );
  };

  let filteredData = cache.get(debouncedTerm);
  if (!filteredData) {
    filteredData = dummyData.filter((item) =>
      item.name.toLowerCase().includes(debouncedTerm.toLowerCase())
    );
    cache.set(debouncedTerm, filteredData);
  }

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="flex justify-between items-center border px-3 border-gray-400 rounded-lg">
        <div className="flex flex-row items-center w-full">
          <CiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 outline-none"
          />
        </div>
        {(debouncedTerm || searchTerm) && (
          <MdOutlineCancel
            onClick={() => {
              setSearchTerm("");
              setDebouncedTerm("");
            }}
            className="cursor-pointer text-gray-500"
          />
        )}
      </div>
      {debouncedTerm && (
        <ul className="mt-2 bg-white border border-gray-400 rounded-lg shadow-lg">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <li
                onClick={() => {
                  setSearchTerm(item.name);
                  setDebouncedTerm("");
                }}
                key={item.id}
                className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer text-left flex items-center gap-2"
              >
                <CiSearch className="text-gray-500" />
                <p>{highlightMatch(item.name, debouncedTerm)}</p>
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;
