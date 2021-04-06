import Link from 'next/link';
import Image from 'next/image';
import { Date } from '..';
import * as style from './postcard.module.scss';

export default function PostCard({ id, date, title, subtitle, heroimage, preview }) {
	return (
		<li className={style.postCard} key={id}>
			<Image width={700} height={400} src={heroimage} />
			<Link href={`/posts/${id}`}>
				<div className={style.cardClickable}>
					<h3 className={style.postHeading}>{title}</h3>
					<h6 className={style.subtitle}>{subtitle}</h6>
					<small className={style.smallDate}>
						<Date dateString={date} />
					</small>
					<p className={style.preview}>{preview}</p>
				</div>
			</Link>
		</li>
	);
}
