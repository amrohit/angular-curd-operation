import { Component, ElementRef } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  inputValue: string;
  editingValue: string
  showText = true;
  showInput = false;
  listArr: { showInput: boolean; showText: boolean; text: string }[] = [];

  onAddtoList() {
    this.listArr.push({
      showInput: false,
      showText: true,
      text: this.inputValue
    });
    this.inputValue = "";
  }

  trackByFunction(index, item) {
    //console.log(index, item);
    return index; //or item
  }

  onRemove(i) {
    this.listArr.splice(i, 1);
  }
  onEdit(index) {
    console.log("on Editted!");
    this.editingValue = this.listArr[index].text;
    this.listArr[index].showInput = true;
    this.listArr[index].showText = false;
  }
  updateText(index) {
    console.log(index);
    this.listArr[index].text = this.editingValue;
    this.listArr[index].showInput = false;
    this.listArr[index].showText = true;
  }
}
