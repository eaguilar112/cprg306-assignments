export default function Item({ id, name, quantity, category, onSelect } ) {
    return(
        <main>
            <div className="bg-slate-900 max-w-sm p-2 m-4" onClick={() => onSelect(id)}>
                <h2 className="text-xl font-bold">{name}</h2>
                <p>Buy {quantity} in {category}</p>
            </div>
        </main>
    );
}