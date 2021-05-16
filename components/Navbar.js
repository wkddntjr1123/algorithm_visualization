import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav_container">
        <Link href="/">
          <li className="nav_item">
            <a>Home</a>
          </li>
        </Link>
        <Link href="/selection-sort">
          <li className="nav_item">
            <a>선택정렬</a>
          </li>
        </Link>
        <Link href="/bubble-sort">
          <li className="nav_item">
            <a>버블정렬</a>
          </li>
        </Link>
        <Link href="/insertion-sort">
          <li className="nav_item">
            <a>삽입정렬</a>
          </li>
        </Link>
        <Link href="#">
          <li className="nav_item">
            <a>병합정렬</a>
          </li>
        </Link>
        <Link href="#">
          <li className="nav_item">
            <a>퀵정렬</a>
          </li>
        </Link>
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
            padding: 30px;
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
