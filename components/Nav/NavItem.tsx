import Link from '../Link';
import type { LinkProps } from '../Link';

export type NavItemProps = {
	/**
	 * The ID of this nav item. Must be unique among all nav items.
	 * 
	 * Appended to `nav-item-` to get the internal element's `id` attribute.
	 */
	id: string,
	/** The text displayed on the nav item. */
	label: string,
	className?: never,
	children?: never
} & LinkProps;

const NavItem = ({ id, label, ...props }: NavItemProps) => (
	<Link
		id={`nav-item-${id}`}
		className="nav-item"
		{...props}
	>
		{label}
	</Link>
);

export default NavItem;