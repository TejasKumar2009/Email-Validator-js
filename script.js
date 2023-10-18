const API_KEY = "YOUR API KEY HERE"

const searchform = document.getElementById("searchform");
const search_input = document.getElementById("searchinput");
const results_box = document.getElementById("results");
const noemail_box = document.getElementById("noemail");
const loading_div = document.getElementById("loadingdiv");

const email_inp = document.getElementById("email");
const domain_inp = document.getElementById("domain");
const user_inp = document.getElementById("user");
const tag_inp = document.getElementById("tag");
const state_inp = document.getElementById("state");
const reason_inp = document.getElementById("reason");
const format_valid_inp = document.getElementById("format_valid");
const mx_valid_inp = document.getElementById("mx_valid");
const score_inp = document.getElementById("score");
const catch_all_inp = document.getElementById("catch_all");
const role_email_inp = document.getElementById("role_email");
const free_email_provider_inp = document.getElementById("free_email_provider");
const disposable_inp = document.getElementById("disposable");
const smtp_valid_inp = document.getElementById("smtp_valid");
const m_quality = document.getElementById("m_quality");
const t_quality = document.getElementById("t_quality");

searchform.addEventListener("submit", async function (e){
    e.preventDefault()
    const search_input_value = search_input.value;
    
    noemail_box.style.display = "none";
    results_box.style.display = "none";
    loading_div.style.display = "flex";

    const response = await fetch(`https://api.emailvalidation.io/v1/info?apikey=${API_KEY}&email=${search_input_value}`);
    const result_data = await response.json();

    const email = result_data.email;
    const domain = result_data.domain;
    const user = result_data.user;
    const tag = result_data.tag;
    const state = result_data.state;
    const reason = result_data.reason;
    const format_valid = result_data.format_valid;
    const mx_valid = result_data.mx_found;
    const score = result_data.score;
    const catch_all = result_data.catch_all;
    const role_email = result_data.role;
    const free_email_provider = result_data.free;
    const disposable = result_data.disposable;
    const smtp_valid = result_data.smtp_check;


    email_inp.innerText = email;
    domain_inp.innerText = domain;
    user_inp.innerText = user;
    tag_inp.innerText = tag;
    state_inp.innerText = state;
    reason_inp.innerText = reason;

    if (format_valid==true) {format_valid_inp.innerText = "Yes"}
    else {format_valid_inp.innerText = "No"}

    if (mx_valid==true) mx_valid_inp.innerText = "Yes"
    else mx_valid_inp.innerText = "No"

    score_inp.innerText = score;
    catch_all_inp.innerText = catch_all;

    if (role_email==true) role_email_inp.innerText = "Yes"
    else role_email_inp.innerText = "No"

    
    if (free_email_provider==true) {free_email_provider_inp.innerText = "Yes"}
    else {free_email_provider_inp.innerText = "No"}
    
    if (disposable==true) {disposable_inp.innerText = "Yes"}
    else {disposable_inp.innerText = "No"}

    if (smtp_valid==true) {smtp_valid_inp.innerText = "Yes"}
    else {smtp_valid_inp.innerText = "No"}

    t_email_score(score)
    m_email_score(score)
    


    loading_div.style.display = "none";
    results_box.style.display = "block";

})

function t_email_score(score){
    if (score>=0.65 && score<=1){
        return t_quality.innerText = "Perfect"
    } else if (score>=0.33 && score <= 0.64){
        return t_quality.innerText = "Medium"
    } else{
        return t_quality.innerText = "Poor"
    }
}

function m_email_score(score){
    if (score>=0.80 && score<=1){
        return m_quality.innerText = "Perfect"
    } else if (score>=0.49 && score <= 0.79){
        return m_quality.innerText = "Medium"
    } else{
        return m_quality.innerText = "Poor"
    }
}
