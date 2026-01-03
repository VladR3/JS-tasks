const form = document.querySelector('#simple-form');

let elements = document.querySelectorAll("[data-val='true']");

const onChangeHandler = (e) => {
    const element = e.target;

    if(element.tagName == 'INPUT'){
        validateElement(element);
    }
}

const onSubmitHandler = (e) => {
    for (let el of form.elements) {
        if (!validateElement(el)) {
            e.preventDefault();
        }
    }
}

elements.forEach((el) => {
    el.addEventListener("focus", (e) => {
        const message = e.target.closest(".form-group").querySelector(".message");
        if (message) message.classList.add("show");
    });

    el.addEventListener("blur", (e) => {
        const message = e.target.closest(".form-group").querySelector(".message");
        if (message) message.classList.remove("show");
    });
});

const validateElement = (element) => {
    for (const key in validators) {
        if (Object.hasOwnProperty.call(validators, key) && typeof validators[key] == "object"){

            if (element.dataset[key]){
                const validator = validators[key];
                if (!validator.isValid(element)){
                    return false;
                }
            }
        }
    }
}

elements.forEach((el) => {
    el.addEventListener("change", onChangeHandler);
});

form.addEventListener("submit", onSubmitHandler);


let validators = {};

validators.validate = function (element, message, predicate) {
    let errorLabel = document.querySelector(
        "#" + element.dataset.errorLabel
    );

    errorLabel.innerHTML = message;
    errorLabel.style.display = "none";

    element.classList.remove("valid");
    element.classList.remove("invalid");

    if (typeof predicate === "function" && predicate()) {
        element.classList.add("valid");
        return true;
    } else {
        element.classList.add("invalid");
        errorLabel.style.display = "block";
        return false;
    }
};

validators.required = {
    isValid: function (element) {
        let message = element.dataset.required;
        return validators.validate(
            element,
            message,
            () => element.value.length > 0
        );
    }
};

validators.confirm = {
    isValid: function (element) {
        let message = "Паролі не співпадають";
        let confirmInput = document.querySelector("#" + element.dataset.confirm);


        return validators.validate(
            element,
            message,
            () => element.value == confirmInput.value
        );
    }
};



