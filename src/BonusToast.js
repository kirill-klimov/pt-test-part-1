export class BonusToast {
    constructor(amount, date, to_burn) {
        this.amount = amount;
        this.date = date;
        this.to_burn = to_burn;
    }

    show() {
        const toast = document.getElementById('toast');
        document.getElementById('amount').textContent = this.amount;
        document.getElementById('date').textContent = this.date;
        document.getElementById('to_burn').textContent = this.to_burn;
        toast.classList.add('show');

        toast.addEventListener('click', this.hide);
    }

    hide() {
        const toast = document.getElementById('toast');
        toast.classList.remove('show');
        toast.classList.add('hide');
        const hideDuractionStr = getComputedStyle(toast).animationDuration;
        const hideDuration = Number(hideDuractionStr.slice(0, -1)) * 1000;
        setTimeout(() => {
            toast.classList.remove('hide');
        }, hideDuration + 50);
    }
} 