import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-matching-game',
    templateUrl: './matching-game.component.html',
    styleUrls: ['./matching-game.component.css']
})
export class MatchingGameComponent implements OnInit, OnDestroy {
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

    ngOnInit() {
        this.cards = this.shuffleCards(this.cards);
    }

    onStartGame() {
        this.startTimer();
    }

    onResetGame() {
        this.stopTimer();
    }

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

    private shuffleCards(cardArr: number[][]) {
        const arr = [].concat(...cardArr);
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return [
            arr.slice(0, 4),
            arr.slice(4, 8),
            arr.slice(8, 12),
            arr.slice(12, 16)
        ];
    }

    ngOnDestroy() {
        this.stopTimer();
    }
}
