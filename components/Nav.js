import Link from 'next/link';

export default function Nav() {
  return (
    <ul>
        <li>
            <Link href='/'>Home</Link>
        </li>
        <li>
            <Link href='/converter'>UUID Converter</Link>
        </li>
    </ul>
  );
}