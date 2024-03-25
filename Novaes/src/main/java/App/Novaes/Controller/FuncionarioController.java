package App.Novaes.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import App.Novaes.Repository.FuncionarioRepository;
import App.Novaes.entity.Funcionario;

@RestController
@RequestMapping("/funcionario")
public class FuncionarioController {

	@Autowired
	private FuncionarioRepository funcionarioRepository;
	
	@GetMapping
	public Iterable<Funcionario> findAll(){
		return funcionarioRepository.findAll();
	}
	
	@PostMapping
	public Funcionario createFuncionario(@RequestBody Funcionario funcionario) {
		return funcionarioRepository.save(funcionario);
	}
	
	@PutMapping("/{id}")
	public Funcionario updateFuncionario(@PathVariable Long id, @RequestBody Funcionario funcionario) {
		funcionario.setId(id);
		return funcionarioRepository.save(funcionario);
	}
	
	@DeleteMapping("{id}")
	public void deleteFuncionario(@PathVariable Long id) {
		funcionarioRepository.deleteById(id);
	}
	
	
	
	
	@GetMapping("/nome/{nome}")
	public Iterable<Funcionario> findByNome(@PathVariable String nome){
		return funcionarioRepository.findByNome(nome);
	}
	
	@GetMapping("/{id}")
	public Funcionario findById(@PathVariable Long id) {
		return funcionarioRepository.findById(id).orElse(null);
	}
	
	
	
	
	
	
	
}
