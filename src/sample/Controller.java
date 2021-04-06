package sample;
import java.net.URL;
import java.util.ResourceBundle;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.TextField;

public class Controller {

    @FXML
    private ResourceBundle resources;

    @FXML
    private URL location;

    @FXML
    private Button loginSignUpButton;

    @FXML
    private TextField login_field;

    @FXML
    private TextField password_field;

    @FXML
    private Button authSignInButton;

    @FXML
    void initialize() {
        assert loginSignUpButton != null : "fx:id=\"loginSignUpButton\" was not injected: check your FXML file 'sample.fxml'.";
        assert login_field != null : "fx:id=\"login_field\" was not injected: check your FXML file 'sample.fxml'.";
        assert password_field != null : "fx:id=\"password_field\" was not injected: check your FXML file 'sample.fxml'.";
        assert authSignInButton != null : "fx:id=\"authSignInButton\" was not injected: check your FXML file 'sample.fxml'.";

    }
}

