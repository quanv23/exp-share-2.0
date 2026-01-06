/**
 * <Summary> A helper modal component that displays content on top of the current page
 * <Description>
 * 		This component renders a modal overlay that can be toggled on and off.
 * 		It accepts children elements to be displayed within the modal and provides an onClose handler to close the modal when the overlay is clicked.
 * </Description>
 */
import { useEffect } from 'react';
import { lockScroll, unlockScroll } from '../utils/scrollLock';

/**
 * Represents the properties of the Modal component
 */
export interface Props {
	/**
	 * Click event handler that closes the modal
	 */
	onClose: () => void;
	/**
	 * The content to be displyed on top
	 */
	children: React.ReactNode;
}

export default function ModalHelper(props: Props) {
	const { onClose, children } = props;

	// Prevent background scrolling when the modal is open
	useEffect(() => {
		lockScroll();

		// Cleanup function to restore scrolling when the modal is closed
		return () => {
			unlockScroll();
		};
	}, []);

	return (
		<div
			className="centered-flex fixed inset-0 bg-myLightGray/50 backdrop-blur-sm z-50"
			onClick={onClose}
		>
			<div
				onClick={(event: React.MouseEvent<HTMLElement>) =>
					event.stopPropagation()
				}
			>
				{children}
			</div>
		</div>
	);
}
