package sample;
import java.net.URL;
import java.util.ResourceBundle;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.CheckBox;
import javafx.scene.control.TextField;

public class signUpController {

    @FXML
    private ResourceBundle resources;

    @FXML
    private URL location;

    @FXML
    private TextField signUpName;

    @FXML
    private TextField signUpSurname;

    @FXML
    private Button SignUpButton;

    @FXML
    private TextField login_field;

    @FXML
    private TextField password_field;

    @FXML
    private TextField signUpCountry;

    @FXML
    private CheckBox signUpCheckBoxMale;

    @FXML
    private CheckBox signUpCheckBoxFemale;

    @FXML
    void initialize() {
        assert signUpName != null : "fx:id=\"signUpName\" was not injected: check your FXML file 'signUp.fxml'.";
        assert signUpSurname != null : "fx:id=\"signUpSurname\" was not injected: check your FXML file 'signUp.fxml'.";
        assert SignUpButton != null : "fx:id=\"SignUpButton\" was not injected: check your FXML file 'signUp.fxml'.";
        assert login_field != null : "fx:id=\"login_field\" was not injected: check your FXML file 'signUp.fxml'.";
        assert password_field != null : "fx:id=\"password_field\" was not injected: check your FXML file 'signUp.fxml'.";
        assert signUpCountry != null : "fx:id=\"signUpCountry\" was not injected: check your FXML file 'signUp.fxml'.";
        assert signUpCheckBoxMale != null : "fx:id=\"signUpCheckBoxMale\" was not injected: check your FXML file 'signUp.fxml'.";
        assert signUpCheckBoxFemale != null : "fx:id=\"signUpCheckBoxFemale\" was not injected: check your FXML file 'signUp.fxml'.";

    }
}
