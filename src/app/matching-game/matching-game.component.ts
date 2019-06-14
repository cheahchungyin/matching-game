import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-matching-game',
    templateUrl: './matching-game.component.html',
    styleUrls: ['./matching-game.component.css']
})
export class MatchingGameComponent implements OnInit, OnDestroy {
    gameStatus = 'STOP';

    score = 0;
    combo = 3;
    moves = 0;

    selectedCard: {x: number; y: number} = null;
    cards = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [0, 1, 2, 3],
        [4, 5, 6, 7]
    ];
    cardStatus: {fixed: boolean; selected: boolean}[][];

    stars = [
        ['fas', 'star'],
        ['fas', 'star'],
        ['fas', 'star']
    ];

    timer = {
        mins: '0',
        secs: '00'
    };
    startedTimer: NodeJS.Timer;

    ngOnInit() {
        this.onResetGame();
    }

    onStartGame() {
        this.startTimer();
        this.gameStatus = 'START';
    }

    onResetGame() {
        this.stopTimer();
        this.cards = this.shuffleCards(this.cards);
        this.cardStatus = this.resetCardStatus();
        this.gameStatus = 'STOP';
        this.score = 0;
        this.combo = 3;
        this.moves = 0;
        this.updateStars();
    }

    onWinGame() {
        clearInterval(this.startedTimer);
    }

    onCardClick(x: number, y: number) {
        if (this.gameStatus !== 'START') {
            this.onStartGame();
        }
        const newStatus = this.cardStatus[x][y];
        // if the card is fixed, don't flip it and return
        if (newStatus.fixed) { return; }
        // else, flip the card
        newStatus.selected = !newStatus.selected;
        this.playAudio();
        // remove from previous card
        if (!newStatus.selected) {
            this.selectedCard = null;
            return;
        }
        // check if previous card exists,
        if (!this.selectedCard) {
            // if not, set this as previous card
            this.selectedCard = {x, y};
        } else {
            const a = this.selectedCard;
            // if yes, increment one move and compare cards
            this.moves += 1;
            if (this.cards[a.x][a.y] === this.cards[x][y]) {
                // fix cards if true, add score
                this.addScore();
                this.cardStatus[a.x][a.y].fixed = true;
                this.cardStatus[x][y].fixed = true;
            } else {
                // else flip the cards back, minus score
                this.minusScore();
                this.cardStatus[a.x][a.y].fixed = true;
                this.cardStatus[x][y].fixed = true;
                setTimeout(() => {
                    this.cardStatus[a.x][a.y].selected = false;
                    this.cardStatus[x][y].selected = false;
                    this.cardStatus[a.x][a.y].fixed = false;
                    this.cardStatus[x][y].fixed = false;
                }, 800);
            }
            this.selectedCard = null;
        }
    }

    private addScore() {
        this.score += 1;
        if (this.combo < 3) {
            this.combo += 1;
            this.updateStars();
        }
        if (this.score >= 8) {
            this.onWinGame();
        }
    }

    private minusScore() {
        if (this.combo > 0) {
            this.combo -= 1;
            this.updateStars();
        }
    }

    private updateStars() {
        const n = this.combo;
        this.stars = new Array(n).fill(['fas', 'star']).concat(new Array(3-n).fill(['far', 'star']));
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

    private resetCardStatus() {
        const arr = new Array(4).fill(null).map(i => {
            return new Array(4);
        });
        for (const x of Array(4).keys()) {
            for (const y of Array(4).keys()) {
                arr[x][y] = {fixed: false, selected: false};
            }
        }
        return arr;
    }

    private playAudio() {
        const audio = new Audio();
        audio.src = '/assets/audios/card-flip-start.wav';
        audio.load();
        audio.play();
    }

    ngOnDestroy() {
        this.stopTimer();
    }
}
