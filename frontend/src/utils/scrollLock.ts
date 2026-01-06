/**
 * <Summary>
 *      A utility module to manage scroll locking in the application
 * </Summary>
 * <Description>
 *      This module provides functions to lock and unlock scrolling on the document body.
 *      It maintains a count of active locks to ensure that scrolling is only restored when all locks are released.
 *      Used to prevent nested modals from interfering with each other's scroll behavior.
 * </Description>
 */

let lockCount = 0;

// Increases the lock count and disables scrolling if this is the first lock
export function lockScroll() {
	if (lockCount === 0) {
		document.body.style.overflow = 'hidden';
	}
	lockCount++;
}

// Decreases the lock count and restores scrolling if no locks remain
export function unlockScroll() {
	if (lockCount > 0) {
		lockCount--;
		if (lockCount === 0) {
			document.body.style.overflow = '';
		}
	}
}
