import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alurapic';

  photos = [
    {
      url: 'http://wisetoast.com/wp-content/uploads/2015/10/The-Birth-of-Venus-Painting.jpg',
      by: 'Botticelli'
    },
    {
      url: 'http://wisetoast.com/wp-content/uploads/2015/10/Cafe-Terrace-at-Night-van-gogh-painting.jpg',
      by: 'Van Gogh'
    },
    {
      url: 'http://wisetoast.com/wp-content/uploads/2015/10/las-meninas-de-diego-vel%C3%A1zquez-painting.jpg',
      by: 'Diego Valazquez'
    },
    {
      url: 'http://wisetoast.com/wp-content/uploads/2015/10/the-scream-edvard-munch-poster.jpg',
      by: 'Edvard Munch'
    },
    {
      url: 'http://wisetoast.com/wp-content/uploads/2015/10/Starry-Night-by-Vincent-Van-Gogh-painting.jpg',
      by: 'Van Gogh'
    },
    {
      url: 'http://wisetoast.com/wp-content/uploads/2015/10/the-creation-of-adam-michelangelo-wallpaper.jpg',
      by: 'Michelangelo'
    },
    {
      url: 'http://wisetoast.com/wp-content/uploads/2015/10/the-last-supper-mary-magdalene-painting.jpg',
      by: ''
    },
    {
      url: 'http://wisetoast.com/wp-content/uploads/2015/10/night-watch-rembrandt-wallpaper.jpg',
      by: 'Rembrandt'
    },
    {
      url: 'http://wisetoast.com/wp-content/uploads/2015/10/school-of-athens-raphael-painting.jpg',
      by: 'Raphael'
    },
    {
      url: 'http://wisetoast.com/wp-content/uploads/2015/10/mona-lisa-leonardo-da-vinci-most-famous-painting.jpg',
      by: 'Da Vinci'
    }
  ];
}
