import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <ul className="nav_container">
                <li className="nav_item">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li className="nav_item">
                    <Link href="/">
                        <a>선택정렬</a>
                    </Link>
                </li>
                <li className="nav_item">
                    <Link href="#">
                        <a>버블정렬</a>
                    </Link>
                </li>
                <li className="nav_item">
                    <Link href="/insertionSort">
                        <a>Insertion Sort</a>
                    </Link>
                </li>
                <li className="nav_item">
                    <Link href="#">
                        <a>병합정렬</a>
                    </Link>
                </li>
                <li className="nav_item">
                    <Link href="#">
                        <a>퀵정렬</a>
                    </Link>
                </li>
            </ul>
            <style jsx>
                {`
                    .nav_container {
                        display: flex;
                        flex-direction: row;
                        width: 100%;
                        margin: 0;
                        padding: 0;
                        background-color: #767676;
                        list-style: none;
                    }

                    .nav_item {
                        padding: 15px;
                        cursor: pointer;
                    }
                    .nav_item:hover {
                        background-color: #6b7cab;
                        transition: 0.7s;
                    }

                    .nav_item a {
                        text-align: center;
                        text-decoration: none;
                        color: white;
                    }
                `}
            </style>
        </nav>
    );
};

export default Navbar;
