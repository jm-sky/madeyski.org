import { copyToClipboard } from './clipboard';

class ClipboardHandler {
  private readonly COPIED_DELAY = 3000;

  private initialized = false;

  public init(): void {
    if (this.initialized) return;

    this.initialized = true;
    document.addEventListener('click', this.handleClick.bind(this));
  }

  private async handleClick(e: Event): Promise<void> {
    const target = e.target as Element;
    if (!target) return;

    const button = target.closest('.copy-button') as HTMLElement;
    if (!button) return;

    e.preventDefault();
    const copyText = button.getAttribute('data-copy-text');
    if (!copyText) return;

    const success = await copyToClipboard(copyText);

    if (success) {
      button.classList.add('copied');

      setTimeout(() => {
        button.classList.remove('copied');
      }, this.COPIED_DELAY);
    }
  }
}

// Export singleton instance
export const clipboardHandler = new ClipboardHandler();
