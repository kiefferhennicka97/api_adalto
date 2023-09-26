import subprocess
import sys

def listar_ip(port, host):
    command_server = f"ssh -p {port} {host} 'grep Server= /etc/zabbix/zabbix_agentd.conf | sed -n 3p'"
    command_server_active = f"ssh -p {port} {host} 'grep ServerActive= /etc/zabbix/zabbix_agentd.conf | sed -n 6p'"
    
    ips_server = subprocess.getoutput(command_server)
    ips_server_active = subprocess.getoutput(command_server_active)
    
    print(ips_server_active)
    print(ips_server)

def listar_hostname(port, host):
    command_hostname = f"ssh -p {port} {host} 'grep Hostname= /etc/zabbix/zabbix_agentd.conf | sed -n 2p'"
    
    list_hostname = subprocess.getoutput(command_hostname)
    
    print(list_hostname)

def alterar(port, host):
    new_ip = input('Informe o novo IP: ')
    
    command_ip_active = f"ssh -p {port} {host} \"sed -i 's/^ServerActive=.*$/ServerActive={new_ip}/' /etc/zabbix/zabbix_agentd.conf\""
    command_ip_server = f"ssh -p {port} {host} \"sed -i 's/^Server=.*$/Server={new_ip}/' /etc/zabbix/zabbix_agentd.conf\""
    command_restart = f"ssh -p {port} {host} 'service zabbix-agent restart'"
    
    subprocess.run(command_ip_active, shell=True)
    subprocess.run(command_ip_server, shell=True)
    
    print("Restartando Zabbix-Agent")
    subprocess.run(command_restart, shell=True)

if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Uso: python script.py <port> <host> <comando>")
        sys.exit(1)

    port = sys.argv[1]
    host = sys.argv[2]
    comando = sys.argv[3]

    if comando == "list":
        listar_ip(port, host)
    elif comando == "hostname":
        listar_hostname(port, host)
    elif comando == "alt":
        alterar(port, host)
    else:
        print("Comando não reconhecido. Use 'list', 'hostname' ou 'alt'.")
# kiefferhennicka