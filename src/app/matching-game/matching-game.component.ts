import { Component, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-matching-game',
    templateUrl: './matching-game.component.html',
    styleUrls: ['./matching-game.component.css']
})
export class MatchingGameComponent implements OnDestroy {
    cards = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [0, 1, 2, 3],
        [4, 5, 6, 7]
    ];
    timer = {
        mins: '0',
        secs: '00'
    };
    startedTimer: NodeJS.Timer;

    private startTimer() {
        clearInterval(this.startedTimer);
        this.startedTimer = setInterval(() => {
            const secs = this.timer.secs;
            if (+secs < 59) {
                this.timer.secs = String(+secs + 1).padStart(2, '0');
            } else {
                this.timer.secs = '00';
                this.timer.mins = String(+this.timer.mins + 1);
            }
        }, 1000);
    }

    private stopTimer() {
        this.timer.mins = '0';
        this.timer.secs = '00';
        clearInterval(this.startedTimer);
    }

    onStartGame() {
        this.startTimer();
    }

    onResetGame() {
        this.stopTimer();
    }

    ngOnDestroy() {
        this.stopTimer();
    }
}
