import { BaseViewModel } from '../../../mvvm';

/**
 * ViewModel for the HomeView
 */
export default class HomeViewModel extends BaseViewModel {
    constructor() {
        super();
        this.counter = 0;

        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
    }

    incrementCounter() {
        this.counter++;
        super.notifyListeners(this);
    }

    decrementCounter() {
        this.counter--;
        super.notifyListeners(this);
    }
}