export default function APISCounter({count}) {
    return (
        <button id="entities-counter" className="pointer-events-none bg-white text-[var(--main-blue)] border-2 border-[var(--main-blue)] shadow hidden md:block px-4 rounded font-bold h-14 text-xl">
              {count || 0}
            </button>
    );
}
